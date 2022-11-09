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
    };
  }

  constructor() {
    super();
    this.view = '';
    this.applications = [];
  }

  render() {
    return html`
      <div id="home-container">
        <div id="applications-container">
          ${this.applications.map(application => {
            return html`
              <div id="application">
                <img src="${application.icon}" />
                <p>${application.name}</p>
              </div>
            `;
          })}
        </div>
        <div id="dots">● ● ●</div>
        <div id="most-used-apps">
        
        </div>
      </div>
    `;
  }
}

window.customElements.define('home-component', HomeComponent);
