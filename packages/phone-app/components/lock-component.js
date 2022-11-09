import { html, LitElement } from 'lit';
import lockStyles from '../styles/lock-styles';
import '@polymer/iron-icon';
import '@polymer/iron-icons';
import '@polymer/iron-icons/device-icons';
import '@polymer/iron-icons/editor-icons';
import '@polymer/iron-icons/image-icons';

export class LockComponent extends LitElement {
  static get styles() {
    return [lockStyles];
  }

  static get properties() {
    return {
      view: {
        type: String,
      },
      applications: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.view = '';
    this.applications = [];
    this.time = new Date();
    this.date = new Date();
  }

  render() {
    return html`
      <div id="lock-container">
        <div id="lock-icon">
          <iron-icon icon="icons:lock"></iron-icon>
        </div>
        <h1 id="lock-hour">
          ${`${this.time.getHours()} : ${
            this.time.getMinutes() < 10 ? '0' : ''
          }${this.time.getMinutes()}`}
        </h1>
        <p id="date">${`${this.date.toDateString()}`}</p>
        <div id="lock-notifications">
          ${this.applications.map(application => {
            if (application.notification > 0) {
              return html`
                <div id="notification">
                  <span id="notification-name"
                    ><img src="${application.icon}" />${application.name}</span
                  >
                  <p id="notification-message">
                    ${application.notification} notifications
                  </p>
                </div>
              `;
            }
          })}
        </div>
        <div id="footer-icons">
          <div id="lantern">
            <iron-icon icon="editor:highlight"></iron-icon>
          </div>
          <div id="camera">
            <iron-icon icon="image:camera-alt"></iron-icon>
          </div>
        </div>
        <div id="bar"></div>
      </div>
    `;
  }
}

window.customElements.define('lock-component', LockComponent);
