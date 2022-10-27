import { html } from 'lit';
import '@polymer/iron-icons/social-icons';
import '@polymer/iron-icons/av-icons';
import { component } from 'haunted';

/**
 * @customElement
 * @polymer
 */
const Section = ({ icon, label }) => html`
  <style>
    :host {
      display: var(--layout-vertical_-_display);
      flex-direction: var(--layout-vertical_-_flex-direction);
    }

    .header {
      color: var(--dash-section-color, black);
      margin-bottom: 12px;
      display: var(--layout-horizontal_-_display);
      flex-direction: var(--layout-horizontal_-_flex-direction);
      align-items: var(--layout-center-center_-_align-items);
      justify-content: var(--layout-center-center_-_justify-content);
    }

    .icon {
      width: 36px;
      height: 36px;
      margin-right: 4px;
    }

    .label {
      font-weight: 900;
      font-size: 36px;
      text-transform: uppercase;
    }
  </style>

  <div class="header">
    <iron-icon class="icon" icon="${icon}"></iron-icon>
    <div class="label">${label}</div>
  </div>

  <slot></slot>
`;

const DashSection = component(Section, {
  observedAttributes: ['icon', 'label'],
});

customElements.define('dash-section', DashSection);
