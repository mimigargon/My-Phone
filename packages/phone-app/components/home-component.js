import { html, LitElement } from 'lit';
import homeStyles from '../styles/home-styles';

export class HomeComponent extends LitElement {
  static get styles() {
    return [homeStyles];
  }

  static get properties() {
    return {
      view: {
        type: String,
      },
      applications: {
        type: Array,
      },
      favApplications: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.view = '';
    this.applications = [];
    this.favApplications = [];
  }

  firstUpdated() {
    this.filteredFavApplications();
  }

  filteredFavApplications() {
    this.favApplications = this.applications.filter(
      application =>
        application.name.includes('Phone') ||
        application.name.includes('Safari') ||
        application.name.includes('Telegram') ||
        application.name.includes('Spotify')
    );
  }

  onSelectedApp(event) {
    const application = event.currentTarget.application;
    this.dispatchEvent(
      new CustomEvent('selected-app', { detail: application })
    );
  }

  onFavApp(event) {
    const favApp = event.currentTarget.favApp;
    this.dispatchEvent(new CustomEvent('fav-app', { detail: favApp }));
  }

  render() {
    return html`
      <div id="home-container">
        <div id="applications-container">
          ${this.applications.map(application => {
            if (
              application.name.includes('Phone') ||
              application.name.includes('Safari') ||
              application.name.includes('Telegram') ||
              application.name.includes('Spotify')
            ) {
              return html``;
            } else {
              return html`
                <div
                  class="application"
                  @click="${this.onSelectedApp}"
                  .application="${application}"
                >
                  <img src="${application.icon}" />
                  <p>${application.name}</p>
                  ${application.notification !== 0
                    ? html`<div class="notification-bubble">
                        <p class="notification-number">
                          ${application.notification}
                        </p>
                      </div>`
                    : html``}
                </div>
              `;
            }
          })}
        </div>
        <div id="dots">● ● ●</div>
        <div id="most-used-apps">
          ${this.favApplications.map(favApp => {
            return html`
              <div
                class="fav-app"
                @click="${this.onFavApp}"
                .favApp="${favApp}"
              >
                <img src="${favApp.icon}" />
                ${favApp.notification !== 0
                  ? html`<div class="notification-bubble">
                      <p class="notification-number">${favApp.notification}</p>
                    </div>`
                  : html``}
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }
}

window.customElements.define('home-component', HomeComponent);
