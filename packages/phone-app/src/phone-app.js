import { LitElement, html } from 'lit';
import phoneStyle from '../styles/phone-style';

import "@phone/home-component";
import "@phone/lock-component";
import "@phone/gallery-component";
import "@phone/chat-component";
import "@phone/streaming-app";
import "@phone/wordle-app";

export class PhoneApp extends LitElement {
  static get styles() {
    return [phoneStyle];
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

customElements.define('phone-app', PhoneApp);
