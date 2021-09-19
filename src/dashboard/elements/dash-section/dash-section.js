import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/iron-icons/social-icons';
import '@polymer/iron-icons/av-icons';

/**
 * @customElement
 * @polymer
 */
class DashSection extends PolymerElement {
	static get is() {
		return 'dash-section';
	}

	static get properties() {
		return {
			icon: String,
			label: String
		};
	}

	static get template() {
		return html`
			<style>
			:host {
				@apply --layout-vertical;
			}

			:host(:not(:last-child)) {
				margin-bottom: 36px;
			}

			#header {
				color: var(--dash-section-color, black);
				margin-bottom: 12px;
				@apply --layout-horizontal;
				@apply --layout-center;
				@apply --layout-flex-none;
			}

			#icon {
				width: 36px;
				height: 36px;
				margin-right: 4px;
			}

			#label {
				font-weight: 900;
				font-size: 36px;
				text-transform: uppercase;
			}

			#leftWing {
				margin-right: 20px;
			}

			#rightWing {
				margin-left: 20px;
			}

			.wing {
				background-color: var(--dash-section-color, black);
				height: 1px;
				@apply --layout-flex;
			}
		</style>

		<div id="header">
			<div id="leftWing" class="wing"></div>
			<iron-icon id="icon" icon="[[icon]]"></iron-icon>
			<div id="label">[[label]]</div>
			<div id="rightWing" class="wing"></div>
		</div>

		<slot></slot>
		`;
	}
}

customElements.define(DashSection.is, DashSection);
