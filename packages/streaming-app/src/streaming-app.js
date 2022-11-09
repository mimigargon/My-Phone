import { LitElement, html} from 'lit';
import streamingStyles from '../styles/streaming-styles';

import { LoginComponent } from '../components/login-component';
import { MenuComponent } from '../components/menu-component';
import { ProfileComponent } from '../components/profile-component';
import { RegisterComponent } from '../components/register-component';

export class StreamingApp extends LitElement {
  static get styles() {
    return [streamingStyles];
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html``;
  }
}

customElements.define('streaming-app', StreamingApp);
