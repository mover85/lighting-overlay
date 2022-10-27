import { html } from 'lit';
import { when } from 'lit/directives/when';
import { map } from 'lit/directives/map';
import { unsafeHTML } from 'lit/directives/unsafe-html';
import { component, useEffect, useState } from 'haunted';
import { useReplicant } from '../../../hooks/use-replicant';

import '@polymer/iron-image/iron-image';

const TwitterTweet = () => {
  const [tweet] = useReplicant('tweet', {
    avatarUrl: '',
    name: '',
    screenName: '',
    createdAt: null,
    id: null,
    images: [],
  });
  const [profileUrl, setProfileUrl] = useState('');
  const [tweetUrl, setTweetUrl] = useState('');
  const [imageCount, setImageCount] = useState(0);
  const {
    screenName,
    id,
    name,
    avatarUrl,
    body,
    images,
  } = tweet;

  useEffect(
    () => setProfileUrl(`https://twitter.com/${screenName}`),
    [screenName],
  );

  useEffect(
    () => setTweetUrl(`${profileUrl}/status/${id}`),
    [profileUrl, id],
  );

  useEffect(
    () => {
      setImageCount(images.length);
    },
    [images],
  );

  return html`
    <style>
    :host {
      display: var(--layout-vertical_-_display);
      flex-direction: var(--layout-vertical_-_flex-direction);
      margin-bottom: 10px;
      margin-top: 16px;
      position: relative;
    }

    a {
      text-decoration: none;
      color: black;
    }

    a:hover {
      color: #2b7bb9;
    }

    .tweet-wrapper {
      position: relative;
      height: 10.5em;
    }

    .tweet {
      display: var(--layout-vertical_-_display);
      flex-direction: var(--layout-vertical_-_flex-direction);
      margin-left: 58px;
    }

    .tweet header {
      display: var(--layout-vertical_-_display);
      margin-bottom: 0.5em;
      height: 1.25em;
      justify-content: var(--layout-justified_-_justify-content);
      align-items: var(--layout-center_-_align-items);
    }

    .avatar {
      position: absolute;
      top: 0;
      left: 0;
      width: 48px;
      height: 48px;
      border-radius: 3px;
    }

    .tweet-link {
      flex-shrink: 0;
    }

    .profile-link {
      word-break: break-word;
      word-wrap: break-word;
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 0.5em;
    }

    .name {
      font-weight: bold;
      font-size: 16px;
    }

    .screen-name {
      font-size: 14px;
    }

    .body {
      height: 7em;
      overflow-y: auto;
    }

    .media {
      position: absolute;
      bottom: 0;
      text-align: center;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: baseline;
    }

    .media a {
      font-size: 16px;
      display: inline-block;
      margin-bottom: -6px;
    }

    .link {
      color: #3FC1F1;
    }

    .link.orange {
      color: #F47425;
    }

    img.emoji {
      height: 1em;
      width: 1em;
      margin: 0 .05em 0 .1em;
      vertical-align: -0.1em;
    }
  </style>

  <div class="tweet-wrapper">
    <div class="tweet">
    ${when(name, () => html`
      <header>
        <a class="profile-link" href="${profileUrl}" target="_blank">
          <iron-image class="avatar" src="${avatarUrl}" sizing="contain" fade></iron-image>
          <span class="name">${name}</span>
          <span class="screen-name">@${screenName}</span>
        </a>
        <a class="tweet-link" href="${tweetUrl}" target="_blank">View tweet</a>
      </header>

      <div class="body">${unsafeHTML(body)}</div>
    `, () => html`
      <p>No tweets to show.</p>
    `)}
    </div>
  </div>

  ${when(imageCount > 0, () => html`
    <div class="media">
      <b>Tweet has ${imageCount} ${imageCount > 1 ? 'photos' : 'photo'}:&nbsp;</b>
    ${map(images, (image, index) => html`
      <a class="imageLink" href="${image}" target="_blank">${index + 1}</a>
      &nbsp;
    `)}
    </div>
  `)}
  `;
};

const DashTwitterTweet = component(TwitterTweet);

customElements.define('dash-twitter-tweet', DashTwitterTweet);
