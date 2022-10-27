/* eslint-disable camelcase */
import { TwitterApi, ETwitterApiError, ETwitterStreamEvent } from 'twitter-api-v2';
import queue from 'queue';
import twemoji from 'twemoji';
import { autop } from '@wordpress/autop';
import * as filter from 'leo-profanity';

const HASHTAG = '#millarstlights';

const handleError = (e) => {
  // e is either a TwitterApiRequestError or a TwitterApiError
  if (e.type === ETwitterApiError.Request) {
    // Thrown if request fails (network error).
    throw new Error(`Request failed. ${e.requestError}`);
  } else if (e.type === ETwitterApiError.Response) {
    // Thrown if Twitter responds with a bad HTTP status
    throw new Error(`Twitter didn't accept your request. HTTP code: ${e.code}`);
  }
};

class Stream {
  constructor(nodecg) {
    this.stream = null;
    this.nodecg = nodecg;
    this.twitter = null;
    this.durationTimer = false;
    this.currentCallback = null;
    this.debug = false;

    this.streamPaused = nodecg.Replicant('streamPaused', {
      defaultValue: true,
      persistent: false,
    });
    this.streamConnected = nodecg.Replicant('streamConnected', {
      defaultValue: false,
      persistent: false,
    });
    this.tweetShowing = nodecg.Replicant('tweetShowing', {
      defaultValue: false,
      persistent: false,
    });
    this.tweetHold = nodecg.Replicant('tweetHold', {
      defaultValue: false,
      persistent: false,
    });
    this.tweetDuration = nodecg.Replicant('tweetDuration', {
      defaultValue: 10,
      persistent: true,
    });
    this.tweet = nodecg.Replicant('tweet', {
      defaultValue: {
        avatarUrl: '',
        name: '',
        screenName: '',
        createdAt: null,
        id: null,
        images: [],
      },
    });

    if (this.nodecg.bundleConfig.twitter?.debug === true) {
      this.nodecg.log.info(`${this.nodecg.bundleName} is in debug mode, using hashtag #cat`);
      this.debug = true;
    }

    this.queue = queue({
      concurrency: 1,
      autostart: true,
    });

    this.login()
      .then(() => this.setRules())
      .catch((e) => nodecg.log.error(e));
  }

  async login() {
    const consumer = new TwitterApi({
      appKey: this.nodecg.bundleConfig.twitter.consumerKey,
      appSecret: this.nodecg.bundleConfig.twitter.consumerSecret,
    });

    try {
      this.twitter = await consumer.appLogin();
    } catch (e) {
      handleError(e);
    }
  }

  async setRules() {
    if (!this.twitter) {
      throw new Error('Twitter API not initialized.');
    }

    // Erase previous rules
    try {
      const rules = await this.twitter.v2.streamRules();
      if (rules.data?.length) {
        await this.twitter.v2.updateStreamRules({
          delete: { ids: rules.data.map((rule) => rule.id) },
        });
      }
    } catch (e) {
      handleError(e);
    }

    // Add my search rule
    try {
      await this.twitter.v2.updateStreamRules({
        add: [{ value: this.debug ? '#cat' : HASHTAG, tag: 'lighting hashtag' }],
      });
    } catch (e) {
      handleError(e);
    }
  }

  async start() {
    if (this.streamConnected.value) {
      return;
    }

    if (!this.twitter) {
      throw new Error('Twitter API not initialized.');
    }

    try {
      // For example, can be any stream function
      this.stream = await this.twitter.v2.searchStream({
        'tweet.fields': ['author_id', 'text', 'id', 'created_at', 'entities'],
        'user.fields': ['name', 'username', 'profile_image_url'],
        'media.fields': ['type', 'url', 'preview_image_url'],
        expansions: ['attachments.media_keys', 'author_id'],
      });
      this.stream.autoReconnect = true;

      this.nodecg.log.info('Connection has been opened.');
      this.streamPaused.value = false;
      this.streamConnected.value = true;
      this.queue.start();
      this.listen();
    } catch (e) {
      handleError(e);
    }
  }

  listen() {
    if (!this.stream) {
      throw new Error('Twitter Stream not initialized.');
    }

    this.nodecg.log.info('Listening for tweets.');

    // Awaits for a tweet
    this.stream.on(
      // Emitted when Node.js {response} emits a 'error' event (contains its payload).
      ETwitterStreamEvent.ConnectionError,
      (err) => {
        this.streamConnected.value = false;
        this.nodecg.log.error('Connection error!', err);
      },
    );

    this.stream.on(
      // Emitted when Node.js {response} is closed by remote or using .close().
      ETwitterStreamEvent.ConnectionClosed,
      () => {
        this.streamConnected.value = false;
        this.nodecg.log.info('Connection has been closed.');
      },
    );

    this.stream.on(
      // Emitted when a Twitter payload (a tweet or not, given the endpoint).
      ETwitterStreamEvent.Data,
      (event) => {
        if (this.queue.length > 20) {
          this.nodecg.log.debug('Tweet queue limit exceeded.');
          return;
        }

        this.nodecg.log.debug('Tweet received.');
        this.processMessage(event);
      },
    );

    this.stream.on(
      // Emitted when a Twitter sent a signal to maintain connection active
      ETwitterStreamEvent.DataKeepAlive,
      () => this.nodecg.log.info('Twitter has sent a keep-alive packet.'),
    );
  }

  stop() {
    if (!this.streamConnected.value) {
      return;
    }
    this.stream.close();
  }

  pause() {
    if (this.streamPaused.value || this.tweetHold.value) {
      return;
    }
    this.nodecg.log.info('Queue has been paused.');
    this.streamPaused.value = true;
    this.queue.stop();
  }

  resume() {
    if (!this.streamPaused.value || this.tweetHold.value) {
      return;
    }
    this.nodecg.log.info('Queue has been resumed.');
    this.streamPaused.value = false;
    this.queue.start();
  }

  showTweet(tweet, cb) {
    // Don't stack pulses
    if (this.tweetShowing.value) {
      return;
    }

    this.currentCallback = cb;
    this.tweet.value = tweet;
    this.tweetShowing.value = true;

    if (this.tweetHold.value) {
      return;
    }

    this.hideTweet();
  }

  hideTweet() {
    // Don't stack pulses
    if (!this.tweetShowing.value) {
      return;
    }

    if (this.tweetHold.value) {
      this.tweetShowing.value = false;

      setTimeout(() => {
        this.currentCallback();
      }, 3 * 1000);
      return;
    }

    // End pulse after "duration" seconds
    this.durationTimer = setTimeout(() => {
      this.tweetShowing.value = false;

      setTimeout(() => {
        this.currentCallback();
      }, 3 * 1000);
    }, this.tweetDuration.value * 1000);
  }

  toggle(isActive) {
    if (this.tweetHold.value === isActive) {
      return;
    }

    if (isActive) {
      this.nodecg.log.info('Tweet is now on hold.');
      if (this.tweetShowing.value && this.durationTimer) {
        clearTimeout(this.durationTimer);
        this.durationTimer = false;
      }
    } else {
      this.nodecg.log.info('Tweet is now not on hold.');
      this.hideTweet();
    }

    this.tweetHold.value = isActive;
  }

  processMessage(tweet) {
    let msg = tweet.data.text;
    let user = {};

    if (filter.check(msg)) {
      return false;
    }

    // Parse mentions
    tweet.includes.users.forEach((usr) => {
      if (usr.id === tweet.data.author_id) {
        user = usr;
      }
    });

    const formattedData = {
      avatarUrl: user.profile_image_url,
      name: user.username,
      screenName: user.name,
      createdAt: tweet.data.created_at,
      id: tweet.data.id,
    };

    // Parse mentions
    tweet.data.entities?.mentions?.reverse().forEach((mention) => {
      const { start, end } = mention;
      /* eslint-disable prefer-template */
      msg = msg.substring(0, start)
        + `<span class="link">${msg.substring(start, end + 1)}</span>`
        + msg.substring(end + 1);
      /* eslint-enable prefer-template */
    });

    // Parse emoji
    msg = twemoji.parse(msg);

    // Parse URLs
    tweet.data.entities?.urls?.forEach((url) => {
      msg = msg.split(url.url).join(`<span class="link">${url.display_url}</span>`);
    });

    // Parse hashtags
    tweet.data.entities?.hashtags?.sort((a, b) => b.tag.length - a.tag.length)
      .forEach((hashtag) => {
        if (hashtag.tag.toLowerCase() === 'millarstlights') {
          msg = msg.split(`#${hashtag.tag}`).join(`<span class="link purple">#${hashtag.tag}</span>`);
        } else {
          msg = msg.split(`#${hashtag.tag}`).join(`<span class="link">#${hashtag.tag}</span>`);
        }
      });

    // Parse media (esp. images)
    const images = [];

    tweet.includes.media?.forEach((medium) => {
      if (medium.type === 'photo') {
        images.push(`${medium.url}:large`);
        msg = msg.split(medium.url).join('');
      } else {
        msg = msg.split(medium.url).join(`<span class="link">${medium.url}</span>`);
      }
    });

    formattedData.images = images;
    formattedData.body = autop(msg);

    const job = (cb) => {
      this.showTweet(formattedData, cb);
    };
    this.queue.push(job);
    this.nodecg.log.debug(`Tweet added to queue at index ${this.queue.length}`);

    return true;
  }
}

export default (nodecg) => {
  if (!nodecg.bundleConfig || typeof nodecg.bundleConfig.twitter === 'undefined') {
    nodecg.log.error(`"twitter" is not defined in cfg/${nodecg.bundleName}.json! `
      + 'This object contains other properties that are required for the Twitter graphic to function.');
    return;
  }

  const twitter = new Stream(nodecg);

  nodecg.listenFor('startTweetStream', () => twitter.start());

  nodecg.listenFor('stopTweetStream', () => twitter.stop());

  nodecg.listenFor('pauseTweetStream', () => twitter.pause());

  nodecg.listenFor('resumeTweetStream', () => twitter.resume());

  nodecg.listenFor('holdTweetToggle', (isActive) => twitter.toggle(isActive));
};
