import { html } from 'lit';
import gsap from 'gsap';
import { createRef, ref } from 'lit/directives/ref';
import '@polymer/iron-image';
import {
  component, useCallback, useEffect, useRef,
} from 'haunted';
import { useReplicant } from '../../../hooks/use-replicant';

const getElementContentWidth = (element) => {
  const styles = window.getComputedStyle(element);
  const padding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
  return element.clientWidth - padding;
};

/**
 * @customElement
 * @polymer
 */
const Nowplaying = () => {
  const [nowPlaying] = useReplicant('nowPlaying', {
    artUrl: '',
    title: '',
    artist: '',
    album: '',
  });
  const {
    title,
    artist,
    album,
    artUrl,
  } = nowPlaying;
  const [nowPlayingShowing] = useReplicant('nowPlayingShowing', false);

  const tl = useRef(gsap.timeline());
  const detailsEl = useRef(createRef());
  const artEl = useRef(createRef());
  const lineEl = useRef(createRef());

  useEffect(() => {
    const titleEl = detailsEl.current.value.querySelector('.title');
    const titleWidth = titleEl.scrollWidth;
    const maxWidth = getElementContentWidth(detailsEl.current.value);
    if (titleWidth > maxWidth) {
      gsap.set(titleEl, { scaleX: maxWidth / titleWidth });
    } else {
      gsap.set(titleEl, { scaleX: 1 });
    }
  }, [title]);

  useEffect(() => {
    const artistEl = detailsEl.current.value.querySelector('.artist');
    const artistWidth = artistEl.scrollWidth;
    const maxWidth = getElementContentWidth(detailsEl.current.value);
    if (artistWidth > maxWidth) {
      gsap.set(artistEl, { scaleX: maxWidth / artistWidth });
    } else {
      gsap.set(artistEl, { scaleX: 1 });
    }
  }, [artist]);

  useEffect(() => {
    const albumEl = detailsEl.current.value.querySelector('.album');
    const albumWidth = albumEl.scrollWidth;
    const maxWidth = getElementContentWidth(detailsEl.current.value);
    if (albumWidth > maxWidth) {
      gsap.set(albumEl, { scaleX: maxWidth / albumWidth });
    } else {
      gsap.set(albumEl, { scaleX: 1 });
    }
  }, [album]);

  const show = useCallback(() => {
    // Prevent first "call" from getting ignored
    tl.current.to({}, 0.01, { });

    tl.current.to(lineEl.current.value, {
      duration: 0.5,
      height: '100%',
      ease: 'Power1.easeInOut',
    });

    tl.current.add('stuffIn');

    tl.current.to(artEl.current.value, {
      duration: 0.4,
      x: '0%',
      ease: 'Power1.easeOut',
    }, 'stuffIn');

    tl.current.to(detailsEl.current.value, {
      duration: 0.7,
      x: '0%',
      ease: 'Power1.easeOut',
    }, 'stuffIn');
  }, []);

  const hide = useCallback(() => {
    tl.current.add('stuffOut');

    tl.current.to(artEl.current.value, {
      duration: 0.4,
      x: '100%',
      ease: 'Power1.easeIn',
    }, 'stuffOut+=0.3');

    tl.current.to(detailsEl.current.value, {
      duration: 0.7,
      x: '-100%',
      ease: 'Power1.easeIn',
    }, 'stuffOut');

    tl.current.to(lineEl.current.value, {
      duration: 0.5,
      height: '0%',
      ease: 'Power1.easeInOut',
    });
  }, []);

  useEffect(() => {
    if (nowPlayingShowing) {
      show();
    } else {
      hide();
    }
  }, [nowPlayingShowing, show, hide]);

  return html`
    <style>
      :host {
        display: flex;
        position: absolute;
        bottom: 88px;
        left: 88px;
      }

      .fullHeight {
        height: 120px;
      }

      .cull {
        overflow: hidden;
      }

      .centerFlex {
        display: flex;
        align-items: center;
      }

      .background {
        background-color: rgba(0, 0, 0, 0.75);
      }

      .art {
        width: 120px;
        background-position: center;
        background-size: contain;
        background-color: #D3C9C9;
        transform: translateX(100%);
      }

      .line {
        width: 3px;
        height: 0;
        background-color: #ac09ff;
      }

      .details {
        display: flex;
        flex-direction: column;
        padding: 1.2em 2em 1em 1em;
        color: #E4E4E4;
        white-space: nowrap;
        max-width: 500px;
        box-sizing: border-box;
        transform: translateX(-100%);
      }

      .title {
        font-size: 30px;
        line-height: 34px;
        transform-origin: left;
        font-weight: 600;
        margin: 0 0 0.25em 0;
      }

      .artist {
        font-size: 20px;
        line-height: 22px;
        transform-origin: left;
        margin: 0 0 0.25em 0;
      }

      .album {
        font-size: 18px;
        line-height: 22px;
        transform-origin: left;
        margin: 0;
      }
    </style>

    <div class="cull fullHeight">
      <iron-image
        class="art fullHeight"
        sizing="contain"
        src="${artUrl}"
        placeholder="${new URL('./img/default_album_cover.jpg', import.meta.url)}"
        preload
        fade
        ${ref(artEl.current)}
      >
      </iron-image>
    </div>
    <div class="cull fullHeight centerFlex">
      <div class="line" ${ref(lineEl.current)}></div>
    </div>
    <div class="cull">
      <div class="details background fullHeight" ${ref(detailsEl.current)}>
        <div>
          <p class="title">&#9834; ${title}</p>
          <p class="artist">${artist}</p>
          <p class="album">${album}</p>
        </div>
      </div>
    </div>
  `;
};

const NowplayingElement = component(Nowplaying);

customElements.define('element-nowplaying', NowplayingElement);
