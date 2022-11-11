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
      },
      isLantern: {
        type: Boolean,
      },
      contacts: {
        type: Array,
      }
    };
  }

  constructor() {
    super();
    this.time = new Date();
    this.date = new Date();
    this.view = 'black';
    this.isLantern = false;
    this.contacts = [
      {
        name: "Ronnie",
        avatar: "https://i.pinimg.com/originals/8e/d1/9f/8ed19fcb8027a60440e56ceca517249c.jpg",
        time: "18:05",
        messages: 
          {
            previous: ["Hey, what's up?", "I'm releasing new music!"],
            last: ["Tell me what you think about!"],
            seen: false,
          }
      },
      {
        name: "Chris",
        avatar: "https://www.ibanez.com/common/product_artist_file/file/a_main_ChristianThompson.jpg",
        time: "05:30",
        messages: 
          {
            previous: ["I've lost my guitar!"],
            last: ["Have you seen it?"],
            seen: true,
          }
      },
      {
        name: "Max",
        avatar: "https://pm1.narvii.com/6905/c517c4b064691adca8f2dcbade76186bc5fb09aer1-1080-1073v2_hq.jpg",
        time: "23:15",
        messages: 
          {
            previous: ["Tomorrow we're going to the studio", "We're recording new tracks"],
            last: ["Wanna come?", "It'd be fun!"],
            seen: false,
          }
      },
      {
        name: "Tyler",
        avatar: "https://64.media.tumblr.com/c009480e64370fb335a9dba068d8a499/tumblr_nkxq19ve2v1srn361o1_1280.jpg",
        time: "02:22",
        messages: 
          {
            previous: ["We have to meet more often!", "It's been a while since the last party"],
            last: ["Feeling like throwing one?"],
            seen: true,
          }
      },
    ]
    this.applications = [
      {
        name: 'FaceTime',
        icon: '../../assets/images/halloween-icons/FaceTime.png',
        notification: 5,
      },
      {
        name: 'Spotify',
        icon: '../../assets/images/halloween-icons/Spotify.png',
        notification: 0,
      },
      {
        name: 'Safari',
        icon: '../../assets/images/halloween-icons/Safari.png',
        notification: 0,
      },
      {
        name: 'Apple Store',
        icon: '../../assets/images/halloween-icons/AppStore.png',
        notification: 3,
      },
      {
        name: 'Game Center',
        icon: '../../assets/images/halloween-icons/Bats Widget.png',
        notification: 0,
      },
      {
        name: 'Twitter',
        icon: '../../assets/images/halloween-icons/Twitter.png',
        notification: 15,
      },
      {
        name: 'Amazon',
        icon: '../../assets/images/halloween-icons/Amazon.png',
        notification: 1,
      },
      {
        name: 'Camera',
        icon: '../../assets/images/halloween-icons/Camera.png',
        notification: 0,
      },
      {
        name: 'Clock',
        icon: '../../assets/images/halloween-icons/Clock.png',
        notification: 0,
      },
      {
        name: 'Contacts',
        icon: '../../assets/images/halloween-icons/Contacts.png',
        notification: 0,
      },
      {
        name: 'Gmail',
        icon: '../../assets/images/halloween-icons/Gmail.png',
        notification: 10,
      },
      {
        name: 'Photos',
        icon: '../../assets/images/halloween-icons/Photos.png',
        notification: 0,
      },
      {
        name: 'Settings',
        icon: '../../assets/images/halloween-icons/Settings.png',
        notification: 0,
      },
      {
        name: 'Telegram',
        icon: '../../assets/images/halloween-icons/Telegram.png',
        notification: 0,
      },
      {
        name: 'Netflix',
        icon: '../../assets/images/halloween-icons/Netflix.png',
        notification: 0,
      },
      {
        name: 'TikTok',
        icon: '../../assets/images/halloween-icons/TikTok.png',
        notification: 0,
      },
      {
        name: 'Phone',
        icon: '../../assets/images/halloween-icons/Phone.png',
        notification: 0,
      },
      {
        name: 'Instagram',
        icon: '../../assets/images/halloween-icons/Instagram.png',
        notification: 0,
      },
      {
        name: 'Planner',
        icon: '../../assets/images/halloween-icons/Planner.png',
        notification: 0,
      },
      {
        name: 'Shein',
        icon: '../../assets/images/halloween-icons/Shein.png',
        notification: 0,
      },
    ];
  }

  updated() {
    this.toogleScreenBackground();
  }

  toogleScreenBackground() {
    const screen = this.shadowRoot.querySelector('#exterior-border');
    if (this.view === 'lock' || this.view === 'home') {
      screen.style.backgroundImage =
        "url('https://wallpapercave.com/wp/wp9394967.jpg')";
    } else if (this.view === 'black') {
      screen.style.backgroundImage =
        "url('https://prodigits.co.uk/thumbs/wallpapers/p2ls/patterns/43/b27b75aa12481297.jpg')";
    }else if(this.view === "chat"){
      screen.style.backgroundImage = "url('https://wallpaperaccess.com/full/1554870.jpg')"
    }
  }

  toggleBlackScreen() {
    if (this.view === 'black') {
      this.view = 'lock';
    } else {
      this.view = 'black';
    }
  }

  toggleLantern(event) {
    const exteriorBorder = this.shadowRoot.getElementById('exterior-border');
    this.isLantern = !this.isLantern;
    if (this.isLantern === true) {
      exteriorBorder.style.boxShadow =
        '-1px -1px 53px 25px rgba(255,255,255,0.77)';
    } else {
      exteriorBorder.style.boxShadow =
        ' -1px -1px 53px -200px rgba(255,255,255,0.77)';
    }
  }

  unlockPhone(event) {
    this.view = 'home';
  }

  onSelectedApp(event) {
    const app = event.detail;
    this.applications = this.applications.map(application => {
      if (application.name === app.name) {
        application.notification = 0;
      }
      return application;
    });
    if (app.name === 'Photos') {
      this.view = 'gallery';
    }
    if (app.name === 'Netflix') {
      this.view = 'streaming';
    }
    if(app.name === 'Game Center'){
      this.view = "game";
    }
  }

  onFavApp(event) {
    const app = event.detail;
    this.applications = this.applications.map(application => {
      if(application.name === app.name) {
        application.notification = 0;
      }
      return application;
    });
    if (app.name === 'Telegram') {
      this.view = 'chat';
    }
    if (app.name === 'Spotify') {
      this.view = 'player';
    }
  }

  backHome(event) {
    this.view = "home";
  }

  render() {
    return html`
      <div id="global-container">
        <div id="exterior-border">
          <div id="app-container">
            <div id="header">
              ${this.view === 'black'
                ? html`<div class="notch-positioner"></div>
                    <div id="notch"></div>`
                : html`${this.view === 'lock'
                      ? html``
                      : html`<div id="left">
                          ${`${this.time.getHours()} : ${
                            this.time.getMinutes() < 10 ? '0' : ''
                          }${this.time.getMinutes()}`}
                        </div>`}
                    <div id="notch"></div>
                    <div id="right">
                      <iron-icon
                        icon="device:signal-cellular-4-bar"
                      ></iron-icon>
                      <iron-icon icon="device:signal-wifi-4-bar"></iron-icon>
                      <iron-icon icon="device:battery-full"></iron-icon>
                    </div>`}
            </div>
            ${this.view === 'lock'
              ? html`<lock-component
                  .applications=${this.applications}
                  @drag-unlock=${this.unlockPhone}
                  @toggle-lantern=${this.toggleLantern}
                ></lock-component>`
              : html``}
            ${this.view === 'home'
              ? html`<home-component
                  .applications=${this.applications}
                  @selected-app=${this.onSelectedApp}
                  @fav-app=${this.onFavApp}
                ></home-component>`
              : html``}
            ${this.view === "chat" ? html `<chat-component .contacts=${this.contacts} @back-home=${this.backHome}></chat-component>` : html ``}
            ${this.view === "gallery" ? html `<gallery-component></gallery-component>` : html ``}
            ${this.view === "player" ? html `<player-component></player-component>` : html ``}
            ${this.view === "streaming" ? html `<streaming-app></streaming-app>` : html ``}
            ${this.view === "game" ? html `<wordle-app></wordle-app>` : html ``}
          </div>
          <div id="button-container">
            <button
              id="lock-unlock"
              @click="${this.toggleBlackScreen}"
            ></button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('phone-app', PhoneApp);
