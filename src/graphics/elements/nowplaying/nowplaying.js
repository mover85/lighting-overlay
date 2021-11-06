import { PolymerElement, html } from '@polymer/polymer';
import gsap from 'gsap';
import '@polymer/iron-image';
import cover from 'url:./img/default_album_cover.jpg';

(function () {
	'use strict';

	const nowPlaying = nodecg.Replicant('nowPlaying');
	const nowPlayingShowing = nodecg.Replicant('nowPlayingShowing');

	/**
	 * @customElement
	 * @polymer
	 */
	class Nowplaying extends PolymerElement {
		static get is() {
			return 'element-nowplaying';
		}

		static get properties() {
			return {
				defaultArtUrl: {
					type: String,
					value: cover,
				},
				artUrl: {
					type: String
				},
				title: {
					type: String,
					value: '',
					observer: 'titleChanged'
				},
				artist: {
					type: String,
					value: '',
					observer: 'artistChanged'
				},
				album: {
					type: String,
					value: '',
					observer: 'albumChanged'
				},
				duration: {
					type: Number,
					value: 15
				},
				showing: {
					type: Boolean,
					value: false,
					readOnly: true
				},
				tl: {
					type: Object,
					value: gsap.timeline(),
				}
			};
		}

		ready() {
			super.ready();

			nowPlaying.on('change', (newVal) => {
				if (typeof newVal !== 'object') {
					return;
				}

				this.artUrl = newVal.artUrl;
				this.title = newVal.title;
				this.artist = newVal.artist;
				this.album = newVal.album;
			});

			nowPlayingShowing.on('change', (newVal) => {
				if (newVal) {
					this.show();
				} else {
					this.hide();
				}
			});
		}

		titleChanged(newVal) {
			this.$.title.innerHTML = `&#9834; ${newVal}`;

			const title = this.$.title;
			const titleWidth = title.scrollWidth;
			const maxWidth = this._getElementContentWidth(this.$.details);
			if (titleWidth > maxWidth) {
				gsap.set(title, {scaleX: maxWidth / titleWidth});
			} else {
				gsap.set(title, {scaleX: 1});
			}
		}

		artistChanged() {
			const artist = this.$.artist;
			const artistWidth = artist.scrollWidth;
			const maxWidth = this._getElementContentWidth(this.$.details);
			if (artistWidth > maxWidth) {
				gsap.set(artist, {scaleX: maxWidth / artistWidth});
			} else {
				gsap.set(artist, {scaleX: 1});
			}
		}

		albumChanged() {
			const album = this.$.album;
			const albumWidth = album.scrollWidth;
			const maxWidth = this._getElementContentWidth(this.$.details);
			if (albumWidth > maxWidth) {
				gsap.set(album, {scaleX: maxWidth / albumWidth});
			} else {
				gsap.set(album, {scaleX: 1});
			}
		}

		show() {
			if (this.showing) {
				return;
			}

			this._setShowing(true);

			const self = this;

			// Prevent first "call" from getting ignored
			this.tl.to({}, 0.01, {});

			this.tl.to(this.$.line, {
				duration: 0.5,
				height: '100%',
				ease: 'Power1.easeInOut'
			});

			this.tl.add('stuffIn');

			this.tl.to(this.$.art, {
				duration: 0.4,
				x: '0%',
				ease: 'Power1.easeOut'
			}, 'stuffIn');

			this.tl.to(this.$.details, {
				duration: 0.7,
				x: '0%',
				ease: 'Power1.easeOut'
			}, 'stuffIn');
		}

		hide() {
			if (!this.showing) {
				return;
			}

			this._setShowing(false);

			this.tl.add('stuffOut');

			this.tl.to(this.$.art, {
				duration: 0.4,
				x: '100%',
				ease: 'Power1.easeIn'
			}, 'stuffOut+=0.3');

			this.tl.to(this.$.details, {
				duration: 0.7,
				x: '-100%',
				ease: 'Power1.easeIn'
			}, 'stuffOut');

			this.tl.to(this.$.line, {
				duration: 0.5,
				height: '0%',
				ease: 'Power1.easeInOut'
			});
		}

		_getElementContentWidth(element) {
			const styles = window.getComputedStyle(element);
			const padding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
			return element.clientWidth - padding;
		}

		static get template() {
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

					#art {
						width: 120px;
						background-position: center;
						background-size: contain;
						background-color: #D3C9C9;
						transform: translateX(100%);
					}

					#line {
						width: 3px;
						height: 0;
						background-color: #ac09ff;
					}

					#details {
						display: flex;
						flex-direction: column;
						padding: 1.2em 2em 1em 1em;
						color: #E4E4E4;
						white-space: nowrap;
						max-width: 500px;
						box-sizing: border-box;
						transform: translateX(-100%);
					}

					#title {
						font-size: 30px;
						line-height: 34px;
						transform-origin: left;
						font-weight: 600;
						margin: 0 0 0.25em 0;
					}

					#artist {
						font-size: 20px;
						line-height: 22px;
						transform-origin: left;
						margin: 0 0 0.25em 0;
					}

					#album {
						font-size: 18px;
						line-height: 22px;
						transform-origin: left;
						margin: 0;
					}
				</style>

        <div class="cull fullHeight">
					<iron-image
						id="art"
						class="fullHeight"
						sizing="contain"
						src="[[artUrl]]"
            placeholder="[[defaultArtUrl]]"
						preload
						fade
					>
					</iron-image>
        </div>
        <div class="cull fullHeight centerFlex">
					<div id="line"></div>
        </div>
        <div class="cull">
					<div id="details" class="background fullHeight">
						<div>
							<p id="title">[[title]]</p>
							<p id="artist">[[artist]]</p>
							<p id="album">[[album]]</p>
						</div>
					</div>
        </div>
			`;
		}
	}

	customElements.define(Nowplaying.is, Nowplaying);
})();
