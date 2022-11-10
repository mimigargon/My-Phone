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
      limit: {
        type: Number,
      },
      isNotification: {
        type: Boolean,
      }
    };
  }

  constructor() {
    super();
    this.view = '';
    this.applications = [];
    this.time = new Date();
    this.date = new Date();
    this.limit = 0;
    this.isNotification = true; 
  }

 

  dragStart(event) {
    this.style.opacity = '.5';
  }

  dragOver(event) {
    this.style.top = `${event.clientY}px`
  }

  dragEnd(event) {
    this.style.opacity = '1';
    let dragY = event.clientY
    if(this.limit < dragY) {
      this.dispatchEvent(new CustomEvent("drag-unlock", {detail: dragY}))
    }
  }

  toggleLantern(event) {
    const lantern = event.currentTarget.lantern
    this.dispatchEvent(new CustomEvent("toggle-lantern", {detail: lantern}))
  }

  lockNotificacionsPositioner() {
    const container = this.shadowRoot.getElementById("lock-notifications")
    for(let application of this.applications){
      if(application.notification === 0){
        const positionerDiv = document.createElement("div");
        positionerDiv.classList.add("lockScreen-positioner");
        container.appendChild(positionerDiv);
      }
    }
  }

  render() {
    return html`
      <div id="lock-container">
        <div id="lock-icon">
          <iron-icon icon="icons:lock-outline"></iron-icon>
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
          <div id="lantern" @click=${this.toggleLantern}>
            <iron-icon icon="editor:highlight"></iron-icon>
          </div>
          <div id="camera">
            <iron-icon icon="image:camera-alt"></iron-icon>
          </div>
        </div>
        <div id="bar" draggable="true" @dragstart=${this.dragStart} @dragover=${this.dragOver} @dragend=${this.dragEnd}></div>
      </div>
    `;
  }
}

window.customElements.define('lock-component', LockComponent);
