import { PolymerElement, html } from '@polymer/polymer';
import gsap from 'gsap';
import '@polymer/iron-image';
import logo from 'url:./img/twitter.svg';

(function () {
	'use strict';

	const tweet = nodecg.Replicant('tweet');
	const tweetShowing = nodecg.Replicant('tweetShowing');

	/**
	 * @customElement
	 * @polymer
	 */
	class Tweet extends PolymerElement {
		static get is() {
			return 'element-tweet';
		}

		static get properties() {
			return {
				imgPath: {
					type: String,
					value: logo,
				},
				tl: {
					type: Object,
					value: gsap.timeline(),
					readOnly: true
				},
				imagesTl: {
					type: Object,
					value: gsap.timeline(),
					readOnly: true
				},
				images: {
					type: Object,
					value() {
						return [];
					},
					observer: 'imagesChanged'
				},
				name: String,
				screenName: String,
				avatarUrl: String,
				_showing: {
					type: Boolean,
					value: false
				},
				_initialized: {
					type: Boolean,
					value: false
				}
			};
		}

		ready() {
			super.ready();

			tweet.on('change', newVal => {
				if (typeof newVal !== 'object') {
					return;
				}

				this.avatarUrl = newVal.avatarUrl;
				this.name = newVal.name;
				this.screenName = newVal.screenName;
				this.images = newVal.images;
				this.$.message.innerHTML = newVal.body;
			});

			tweetShowing.on('change', newVal => {
				if (newVal) {
					this.show();
				} else {
					this.hide();
				}
			});
		}

		imagesChanged() {
			const self = this;

			this.imagesTl.clear();

			if (!this.images || this.images.length === 0) {
				self.imagesTl.to(self.$.image, {
					duration: 0.5,
					opacity: 0,
					ease: 'Power1.easeInOut'
				});
				self.imagesTl.call(() => {
					self.$.image.src = '';
				}, null, null);
				return;
			} else if (this.images.length === 1) {
				this.imagesTl.repeat(0);
			} else {
				this.imagesTl.repeat(-1);
			}

			this.images.forEach((url, i) => {
				self.imagesTl.to(self.$.image, {
					duration: 0.5,
					opacity: 0,
					ease: 'Power1.easeInOut'
				}, `+=${i * 5}`);
				self.imagesTl.call(() => {
					self.$.image.src = '';
					self.$.image.src = url;
				}, null, null);
				self.imagesTl.to(self.$.image, {
					duration: 0.5,
					opacity: 1,
					ease: 'Power1.easeInOut'
				});
			});

			this.imagesTl.to({}, {
				duration: 7
			});
		}

		show() {
			if (this._showing) {
				return;
			}

			this._showing = true;

			const self = this;

			this.tl.to(this.$.line, {
				duration: 0.8,
				width: '100%',
				ease: 'Power3.easeInOut'
			});
			this.tl.to(this.$.tweetBody, {
				duration: 0.5,
				y: '0%',
				ease: 'Power3.easeOut'
			});
			this.tl.to(this.$.image, {
				duration: 1,
				y: '0%',
				ease: 'Power3.easeOut'
			}, '-=0.5');
		}

		hide() {
			if (!this._showing) {
				return;
			}

			this._showing = false;

			this.tl.to(this.$.image, {
				duration: 1,
				y: '100%',
				ease: 'Power3.easeInt'
			});
			this.tl.to(this.$.tweetBody, {
				duration: 0.5,
				y: '-100%',
				ease: 'Power3.easeInt'
			}, '-=0.88');
			this.tl.to(this.$.line, {
				duration: 0.8,
				width: '0%',
				ease: 'Power3.easeInOut'
			});
		}

		static get template() {
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
		
					#tweetBody {
						background-color: rgba(0,0,0,0.75);
						padding: 14px;
						position: relative;
						transform: translateY(-100%);
					}
		
					#image {
						width: 100%;
						height: 500px;
						transform: translateY(100%);
					}
		
					#author {
						display: flex;
						align-items: center;
					}
		
					#author-details {
						display: flex;
						margin-left: 8px;
						flex-direction: column;
						font-size: 90%;
					}
		
					#name {
						margin: 0;
						font-weight: 600;
					}
		
					#screen-name {
						margin: 0;
						font-size: 80%;
						color: #9daaa6;
					}
		
					#avatar {
						width: 48px;
						height: 48px;
						border-radius: 4px;
					}
		
					#message p {
						margin-top: 0.5em;
						margin-bottom: 0.25em;
					}
		
					#logo {
						position: absolute;
						width: 48px;
						height: 48px;
						right: 14px;
						top: 16px;
					}
		
					#line {
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
		
				<div class="cull" style="height: 500px;">
					<iron-image id="image" sizing="contain" position="bottom" preload fade></iron-image>
				</div>
				<div id="line"></div>
				<div class="cull">
					<div id="tweetBody">
						<iron-image id="logo" sizing="contain" preload fade src="[[imgPath]]"></iron-image>
						<div id="author">
							<iron-image id="avatar" sizing="contain" preload fade src="[[avatarUrl]]"></iron-image>
							<div id="author-details">
								<p id="name">[[name]]</p>
								<p id="screen-name">@[[screenName]]</p>
							</div>
						</div>
						<div id="message"></div>
					</div>
				</div>
			`;
		}
	}

	customElements.define(Tweet.is, Tweet);
})();
