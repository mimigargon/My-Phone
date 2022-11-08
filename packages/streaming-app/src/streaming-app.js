import { LitElement, html} from 'lit';
import streamingStyles from '../styles/streaming-styles';

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
