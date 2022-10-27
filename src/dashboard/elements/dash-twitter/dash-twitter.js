import { html } from 'lit';
import { component, useCallback } from 'haunted';
import { classMap } from 'lit/directives/class-map';
import { useReplicant } from '../../../hooks/use-replicant';
import './dash-twitter-tweet';
import '@material/mwc-button';

/**
 * @customElement
 * @polymer
 */
const Twitter = () => {
  const [isConnected] = useReplicant('streamConnected', false);
  const [isPaused] = useReplicant('streamPaused', false);
  const [onHold] = useReplicant('tweetHold', false);
  const [tweetDuration, setDuration] = useReplicant('tweetDuration', 10);

  const stream = useCallback(() => {
    nodecg.sendMessage('startTweetStream');
  }, []);

  const stop = useCallback(() => {
    nodecg.sendMessage('stopTweetStream');
  }, []);

  const pause = useCallback(() => {
    nodecg.sendMessage('pauseTweetStream');
  }, []);

  const resume = useCallback(() => {
    nodecg.sendMessage('resumeTweetStream');
  }, []);

  const hold = useCallback(() => {
    nodecg.sendMessage('holdTweetToggle', !onHold);
  }, [onHold]);

  const duration = useCallback((e) => {
    setDuration(parseInt(e.target.getAttribute('data-duration'), 10));
  }, []);

  return html`
    <style>
      :host {
        display: block;
      }

      .row {
        display: var(--layout_-_display);
      }

      .row :last-child {
        margin-right: 0;
      }

      .row-bottom {
        margin-top: 0.5em;
      }

      mwc-button {
        flex: 1;
        min-width: 1px;
        --mdc-theme-on-primary: white;
        --mdc-ripple-focus-opacity: 0;
        margin-right: 0.5em;
      }

      .resume {
        --mdc-theme-primary: #5ba664;
      }

      .pause,
      .stop {
        --mdc-theme-primary: #c9513e;
      }

      .stream,
      .hold,
      .row-bottom {
        --mdc-theme-primary: #645ba6;
      }

      .toggle.active {
        --mdc-theme-primary: #928bc1;
      }

      img.emoji {
        height: 1em;
        width: 1em;
        margin: 0 .05em 0 .1em;
        vertical-align: -0.1em;
      }
    </style>

    <div class="row">
      <mwc-button class="stream" ?disabled="${isConnected}" raised @click="${() => stream()}" label="Stream"></mwc-button>
      <mwc-button class="stop" ?disabled="${!isConnected}" raised @click="${() => stop()}" label="Stop"></mwc-button>
    </div>

    <dash-twitter-tweet></dash-twitter-tweet>

    <div class="row">
      <mwc-button class="pause" ?disabled="${isPaused || onHold}" raised @click="${() => pause()}" label="Pause"></mwc-button>
      <mwc-button class="resume" ?disabled="${!isPaused || onHold}" raised @click="${() => resume()}" label="Resume"></mwc-button>
      <mwc-button class="hold toggle ${classMap({ active: onHold })}" raised @click="${() => hold()}" label="Hold"></mwc-button>
    </div>

    <div class="row-bottom row">
      <mwc-button class="ten toggle ${classMap({ active: tweetDuration === 10 })}" ?disabled="${!onHold && !isPaused}" raised data-duration="10" @click="${(e) => duration(e)}" label="10 Seconds"></mwc-button>
      <mwc-button class="fifteen toggle ${classMap({ active: tweetDuration === 15 })}" ?disabled="${!onHold && !isPaused}" raised data-duration="15" @click="${(e) => duration(e)}" label="15 Seconds"></mwc-button>
      <mwc-button class="thirty toggle ${classMap({ active: tweetDuration === 30 })}" ?disabled="${!onHold && !isPaused}" raised data-duration="30" @click="${(e) => duration(e)}" label="30 Seconds"></mwc-button>
    </div>
  `;
};

const DashTwitter = component(Twitter);

customElements.define('dash-twitter', DashTwitter);
