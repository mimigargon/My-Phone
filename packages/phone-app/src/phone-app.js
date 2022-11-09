import { LitElement, html } from 'lit';
import phoneStyle from '../styles/phone-style';
import { ChatComponent } from '../components/chat-component';
import { GalleryComponent } from '../components/gallery-component';
import { HomeComponent } from '../components/home-component';
import { LockComponent } from '../components/lock-component';
import { PlayerComponent } from '../components/player-component';
import '@polymer/iron-icon';
import '@polymer/iron-icons';
import '@polymer/iron-icons/device-icons';
import '@phone/streaming-app';
import '@phone/wordle-app';

export class PhoneApp extends LitElement {
  static get styles() {
    return [phoneStyle];
  }

  static get properties() {
    return {
      view: {
        type: String,
      },
      applications: {
        type: Array,
      }
    };
  }

  constructor() {
    super();
    this.time = new Date();
    this.date = new Date();
    this.view = 'lock';
    this.applications = [
      {
        name: "FaceTime",
        icon: "../../assets/images/halloween-icons/FaceTime.png",
        notification: 5,
      },
      {
        name: "Spotify",
        icon: "../../assets/images/halloween-icons/Spotify.png",
        notification: 0,
      },
      {
        name: "Safari",
        icon: "../../assets/images/halloween-icons/Safari.png",
        notification: 0,
      },
      {
        name: "Apple Store",
        icon: "../../assets/images/halloween-icons/AppStore.png",
        notification: 3,
      },
      {
        name: "Game Center",
        icon: "../../assets/images/halloween-icons/Bats Widget.png",
        notification: 0,
      },
      {
        name: "Twitter",
        icon: "../../assets/images/halloween-icons/Twitter.png",
        notification: 15,
      },
      {
        name: "Amazon",
        icon: "../../assets/images/halloween-icons/Amazon.png",
        notification: 1,
      },
      {
        name: "Camera",
        icon: "../../assets/images/halloween-icons/Camera.png",
        notification: 0,
      },
      {
        name: "Clock",
        icon: "../../assets/images/halloween-icons/Clock.png",
        notification: 0,
      },
      {
        name: "Contacts",
        icon: "../../assets/images/halloween-icons/Contacts.png",
        notification: 0,
      },
      {
        name: "Gmail",
        icon: "../../assets/images/halloween-icons/Gmail.png",
        notification: 10,
      },
      {
        name: "Photos",
        icon: "../../assets/images/halloween-icons/Photos.png",
        notification: 0,
      },
      {
        name: "Settings",
        icon: "../../assets/images/halloween-icons/Settings.png",
        notification: 0,
      },
      {
        name: "Telegram",
        icon: "../../assets/images/halloween-icons/Telegram.png",
        notification: 0,
      },
      {
        name: "Netflix",
        icon: "../../assets/images/halloween-icons/Netflix.png",
        notification: 0,
      },
      {
        name: "TikTok",
        icon: "../../assets/images/halloween-icons/TikTok.png",
        notification: 0,
      },
      {
        name: "Phone",
        icon: "../../assets/images/halloween-icons/Phone.png",
        notification: 0,
      },
      {
        name: "Instagram",
        icon: "../../assets/images/halloween-icons/Instagram.png",
        notification: 0,
      },
      {
        name: "Planner",
        icon: "../../assets/images/halloween-icons/Planner.png",
        notification: 0,
      },
      {
        name: "Shein",
        icon: "../../assets/images/halloween-icons/Shein.png",
        notification: 0,
      },
    ];
  }

  toggleUnlock() {
    if (this.view === 'lock') {
      this.view = 'home';
    } else {
      this.view = 'lock';
    }
  }

  render() {
    return html`
      <div id="global-container">
        <div id="app-container">
          <div id="header">
            ${this.view === 'lock'
              ? html``
              : html`<div id="left">
              ${`${this.time.getHours()} : ${
                this.time.getMinutes() < 10 ? '0' : ''
              }${this.time.getMinutes()}`}
            </div>`}
            <div id="notch"></div>
            <div id="right">
              <iron-icon icon="device:signal-cellular-4-bar"></iron-icon>
              <iron-icon icon="device:signal-wifi-4-bar"></iron-icon>
              <iron-icon icon="device:battery-full"></iron-icon>
            </div>
          </div>

          ${this.view === 'lock'
            ? html`<lock-component .applications=${this.applications}></lock-component>`
            : html``}
          ${this.view === 'home'
            ? html`<home-component .applications=${this.applications}></home-component>`
            : html``}
        </div>
        <div id="button-container">
          <button id="lock-unlock" @click="${this.toggleUnlock}"></button>
        </div>
      </div>
    `;
  }
}

customElements.define('phone-app', PhoneApp);
