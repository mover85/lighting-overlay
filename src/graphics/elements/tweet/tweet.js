import { html } from 'lit';
import gsap from 'gsap';
import { unsafeHTML } from 'lit/directives/unsafe-html';
import { createRef, ref } from 'lit/directives/ref';
import {
  component,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'haunted';
import { useReplicant } from '../../../hooks/use-replicant';
import '@polymer/iron-image';

/**
 * @customElement
 * @polymer
 */
const Tweet = () => {
  const [tweet] = useReplicant('tweet', {
    avatarUrl: '',
    name: '',
    screenName: '',
    createdAt: null,
    id: null,
    images: [],
  });
  const [tweetShowing] = useReplicant('tweetShowing', false);
  const [imageSrc, setImageSrc] = useState('');
  const {
    screenName,
    name,
    avatarUrl,
    body,
    images,
  } = tweet;
  const tl = useRef(gsap.timeline());
  const imagesTl = useRef(gsap.timeline());
  const el = useRef(createRef());

  useEffect(() => {
    const context = gsap.context(() => {
      imagesTl.current.clear();
      imagesTl.current.resume();

      if (!images || images.length === 0) {
        imagesTl.current.to('.image', {
          duration: 0.5,
          opacity: 0,
          ease: 'Power1.easeInOut',
        });
        imagesTl.current.call(() => {
          setImageSrc('');
        }, null, null);
        return;
      }

      if (images.length === 1) {
        imagesTl.current.repeat(0);
      } else {
        imagesTl.current.repeat(-1);
      }

      images.forEach((url, i) => {
        imagesTl.current.to('.image', {
          duration: 0.5,
          opacity: 0,
          ease: 'Power1.easeInOut',
        }, `+=${i * 5}`);
        imagesTl.current.call(() => {
          setImageSrc(url);
        }, null, null);
        imagesTl.current.to('.image', {
          duration: 0.5,
          opacity: 1,
          ease: 'Power1.easeInOut',
        });
      });

      imagesTl.current.to({}, {
        duration: 10,
      });
    }, el.current.value);

    return () => context.revert();
  }, [images]);

  const show = useCallback(() => {
    const context = gsap.context(() => {
      tl.current.to('.line', {
        duration: 0.8,
        width: '100%',
        ease: 'Power3.easeInOut',
      });
      tl.current.to('.tweetBody', {
        duration: 0.5,
        y: '0%',
        ease: 'Power3.easeOut',
      });
      tl.current.to('.image', {
        duration: 1,
        y: '0%',
        ease: 'Power3.easeOut',
      }, '-=0.5');
    }, el.current.value);

    return () => context.revert();
  }, []);

  const hide = useCallback(() => {
    const context = gsap.context(() => {
      tl.current.to('.image', {
        duration: 1,
        y: '100%',
        ease: 'Power3.easeInt',
      });
      tl.current.to('.tweetBody', {
        duration: 0.5,
        y: '-100%',
        ease: 'Power3.easeInt',
      }, '-=0.88');
      tl.current.to('.line', {
        duration: 0.8,
        width: '0%',
        ease: 'Power3.easeInOut',
      });

      imagesTl.current.pause();
    }, el.current.value);

    return () => context.revert();
  }, []);

  useEffect(() => {
    if (tweetShowing) {
      show();
    } else {
      hide();
    }
  }, [tweetShowing, show, hide]);

  return html`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 88px;
        right: 88px;
        width: 500px;
        color: #E4E4E4;
        font-size: 24px;
      }

      .tweetBody {
        background-color: rgba(0,0,0,0.75);
        padding: 14px;
        position: relative;
        transform: translateY(-100%);
      }

      .image {
        width: 100%;
        height: 500px;
        transform: translateY(100%);
      }

      .author {
        display: flex;
        align-items: center;
      }

      .author-details {
        display: flex;
        margin-left: 8px;
        flex-direction: column;
        font-size: 90%;
      }

      .name {
        margin: 0;
        font-weight: 600;
      }

      .screen-name {
        margin: 0;
        font-size: 80%;
        color: #9daaa6;
      }

      .avatar {
        width: 48px;
        height: 48px;
        border-radius: 4px;
      }

      .message p {
        margin-top: 0.5em;
        margin-bottom: 0.25em;
      }

      .logo {
        position: absolute;
        width: 48px;
        height: 48px;
        right: 14px;
        top: 16px;
      }

      .line {
        align-self: center;
        height: 4px;
        background-color: #ac09ff;
        width: 0;
        transform-origin: center;
        z-index: 1;
      }

      .link {
        color: #3FC1F1;
      }

      .link.purple {
        color: #ac09ff;
      }

      s {
        text-decoration: none;
      }

      .cull {
        overflow: hidden;
      }

      img.emoji {
        height: 1em;
        width: 1em;
        margin: 0 .05em 0 .1em;
        vertical-align: -0.1em;
      }
    </style>
    <div ${ref(el.current)}>
      <div class="cull" style="height: 500px;">
        <iron-image class="image" src="${imageSrc}" sizing="contain" position="bottom" preload fade></iron-image>
      </div>
      <div class="line"></div>
      <div class="cull">
        <div class="tweetBody">
          <iron-image class="logo" sizing="contain" preload fade src="${new URL('./img/twitter.svg', import.meta.url)}"></iron-image>
          <div class="author">
            <iron-image class="avatar" sizing="contain" preload fade src="${avatarUrl}"></iron-image>
            <div class="author-details">
              <p class="name">${name}</p>
              <p class="screen-name">@${screenName}</p>
            </div>
          </div>
          <div class="message">${unsafeHTML(body)}</div>
        </div>
      </div>
    </div>
      `;
};

const TweetElement = component(Tweet);

customElements.define('element-tweet', TweetElement);
