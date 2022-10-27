import { html } from 'lit';
import {
  component, useCallback, useEffect, useState,
} from 'haunted';
import { classMap } from 'lit/directives/class-map';
import { useReplicant } from '../../../hooks/use-replicant';
import '@material/mwc-button';

const getRandomIntInclusive = (minVal, maxVal) => {
  const min = Math.ceil(minVal);
  const max = Math.floor(maxVal);
  return Math.floor(Math.random() * (max - min + 1) + min);
  // The maximum is inclusive and the minimum is inclusive
};

/**
 * @customElement
 * @polymer
 */
const Nowplaying = () => {
  const [currentSong] = useReplicant('nowPlaying', {
    artUrl: '',
    title: '',
    artist: '',
    album: '',
  });
  const [isPaused] = useReplicant('nowPlayingPaused', false);
  const [title, setTitle] = useState('Waiting for data...');

  useEffect(() => {
    if (currentSong.title === '') {
      return;
    }

    setTitle(currentSong.title);
  }, [currentSong.title]);

  const toggle = useCallback(
    () => nodecg.sendMessage('toggleNowPlaying', !isPaused),
    [isPaused],
  );

  const test = useCallback(() => {
    const random = getRandomIntInclusive(1, 50);
    nodecg.sendMessage('nowPlaying', {
      title: `Test title ${random}`,
      artist: `Test artist ${random}`,
      album: `Test album ${random}`,
    });
  }, []);

  return html`
  <style>
    :host {
      display: var(--layout-vertical_-_display);
      flex-direction: var(--layout-vertical_-_flex-direction);
    }

    .marquee {
      font-weight: 500;
      font-size: 24px;
      flex-grow: 1;
      word-break: break-word;
      word-wrap: break-word;
      margin-bottom: 0.5em;
    }

    .row {
      display: var(--layout-horizontal_-_display);
      justify-content: var(--layout-end-justified_-_justify-content);
    }

    .row :last-child {
      margin-right: 0;
    }

    mwc-button {
      width: 152px;
      margin-right: 1em;
      --mdc-theme-on-primary: white;
      --mdc-theme-primary: #645ba6;
      --mdc-ripple-focus-opacity: 0;
    }

    .toggle.active {
      --mdc-theme-primary: #928bc1;
    }
  </style>

  <div class="marquee">${title}</div>
  <div class="row">
    <mwc-button class="toggle ${classMap({ active: isPaused })}" raised @click="${() => toggle()}" label="Pause"></mwc-button>
    <mwc-button raised @click="${() => test()}" label="Test"></mwc-button>
  </div>
  `;
};

const DashNowplaying = component(Nowplaying);

customElements.define('dash-nowplaying', DashNowplaying);
