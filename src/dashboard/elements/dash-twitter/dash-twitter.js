import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/paper-button';
import './dash-twitter-tweet';

(() => {
	const streamConnected = nodecg.Replicant('streamConnected');
	const streamPaused = nodecg.Replicant('streamPaused');
	const tweetDuration = nodecg.Replicant('tweetDuration');
	const tweetHold = nodecg.Replicant('tweetHold');

	/**
	 * @customElement
	 * @polymer
	 */
	class DashTwitter extends PolymerElement {
		static get is() {
			return 'dash-twitter';
		}

		static get properties() {
			return {};
		}

		ready() {
			super.ready();

			streamConnected.once('declared', () => {
				this.$.stop.setAttribute('disabled', 'true');
			});
	
			streamPaused.once('declared', () => {
				this.$.resume.setAttribute('disabled', 'true');
			});
	
			streamConnected.on('change', newVal => {
				if (newVal) {
					this.$.stream.setAttribute('disabled', 'true');
					this.$.stop.removeAttribute('disabled');
				} else {
					this.$.stop.setAttribute('disabled', 'true');
					this.$.stream.removeAttribute('disabled');
				}
			});

			streamPaused.on('change', newVal => {
				if (newVal) {
					this.$.seven.removeAttribute('disabled');
					this.$.fifteen.removeAttribute('disabled');
					this.$.thirty.removeAttribute('disabled');
					this.$.pause.setAttribute('disabled', 'true');
					this.$.resume.removeAttribute('disabled');
				} else {
					this.$.seven.setAttribute('disabled', 'true');
					this.$.fifteen.setAttribute('disabled', 'true');
					this.$.thirty.setAttribute('disabled', 'true');
					this.$.pause.removeAttribute('disabled');
					this.$.resume.setAttribute('disabled', 'true');
				}
			});

			tweetHold.on('change', newVal => {
				if (newVal) {
					this.$.seven.removeAttribute('disabled');
					this.$.fifteen.removeAttribute('disabled');
					this.$.thirty.removeAttribute('disabled');
					this.$.pause.setAttribute('disabled', 'true');
					this.$.resume.setAttribute('disabled', 'true');
				} else {
					if (!streamPaused.value) {
						this.$.seven.setAttribute('disabled', 'true');
						this.$.fifteen.setAttribute('disabled', 'true');
						this.$.thirty.setAttribute('disabled', 'true');
						this.$.pause.removeAttribute('disabled');
						return;
					}

					this.$.resume.removeAttribute('disabled');
				}
			});
		}

		stream() {
			nodecg.sendMessage('startTweetStream');
		}

		stop() {
			nodecg.sendMessage('stopTweetStream');
		}

		pause() {
			nodecg.sendMessage('pauseTweetStream');
		}

		resume() {
			nodecg.sendMessage('resumeTweetStream');
		}

		hold(e) {
			nodecg.sendMessage('holdTweetToggle', e.target.hasAttribute('active'));
		}
	
		duration(e) {
			tweetDuration.value = parseInt(e.target.getAttribute('data-duration'), 10);
		}
	
		static get template() {
			return html`
				<style>
					:host {
						display: block;
					}

					paper-button {
						flex: 1;
						min-width: 1px;
					}

					#resume {
						--paper-button: {
							color: white;
							background-color: #5BA664;
						};
					}

					#pause,
					#stop {
						--paper-button: {
							color: white;
							background-color: #C9513E;
						};
					}

					#seven,
					#pause,
					#stream {
						margin-left: 0;
					}

					#thirty,
					#stop,
					#hold {
						margin-right: 0;
					}

					#stream,
					#hold,
					paper-button[data-duration] {
						--paper-button: {
							color: white;
							background-color: #645BA6;
						};
					}

					img.emoji {
						height: 1em;
						width: 1em;
						margin: 0 .05em 0 .1em;
						vertical-align: -0.1em;
					}
				</style>

				<div style="display: flex;">
					<paper-button id="stream" raised on-tap="stream">Stream</paper-button>
					<paper-button id="stop" raised on-tap="stop">Stop</paper-button>
				</div>

				<dash-twitter-tweet></dash-twitter-tweet>

				<div style="display: flex;">
					<paper-button id="pause" raised on-tap="pause">Pause</paper-button>
					<paper-button id="resume" raised on-tap="resume">Resume</paper-button>
					<paper-button id="hold" toggles raised on-tap="hold">Hold</paper-button>
				</div>

				<div style="display: flex; margin-top: 8px;">
					<paper-button id="seven" raised data-duration="7" on-tap="duration">7 Seconds</paper-button>
					<paper-button id="fifteen" raised data-duration="15" on-tap="duration">15 Seconds</paper-button>
					<paper-button id="thirty" raised data-duration="30" on-tap="duration">30 Seconds</paper-button>
				</div>
			`;
		}
	}

	customElements.define(DashTwitter.is, DashTwitter);
})();
