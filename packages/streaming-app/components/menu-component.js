import { html, LitElement } from 'lit';
import menuStyles from "../styles/menu-styles";

export class MenuComponent extends LitElement {
  static get styles() {
    return [menuStyles]
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}

window.customElements.define('menu-component', MenuComponent);
