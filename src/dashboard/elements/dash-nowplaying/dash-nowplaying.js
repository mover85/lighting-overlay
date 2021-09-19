import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/paper-button';

(() => {
	const nowPlaying = nodecg.Replicant('nowPlaying');

	/**
	 * @customElement
	 * @polymer
	 */
	class DashNowplaying extends PolymerElement {
		static get is() {
			return 'dash-nowplaying';
		}

		static get properties() {
			return {
				currentSong: {
					type: String,
					value: 'Waiting for data...'
				}
			};
		}

		ready() {
			super.ready();

			nowPlaying.on('change', newVal => {
				if (newVal.title) {
					this.currentSong = newVal.title;
				} else {
					this.currentSong = 'Waiting for data...';
				}
			});
		}

		toggle(e) {
			nodecg.sendMessage('toggleNowPlaying', e.target.hasAttribute('active'));
		}

		static get template() {
			return html`
				<style>
					:host {
						@apply --layout-horizontal;
						@apply --layout-center;
					}

					#marquee {
						font-weight: 500;
						font-size: 24px;
						word-break: break-word;
						word-wrap: break-word;
						@apply --layout-flex;
					}

					#toggle {
						width: 152px;
						margin-left: 16px;
						margin-right: 0;
						--paper-button: {
							color: white;
							background-color: #645BA6;
						};
					}
				</style>

				<div id="marquee">[[currentSong]]</div>
				<paper-button id="toggle" toggles raised on-tap="toggle">Show</paper-button>
			`;
		}
	}

	customElements.define(DashNowplaying.is, DashNowplaying);
})();
