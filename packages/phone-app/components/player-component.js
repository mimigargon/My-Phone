import { html, LitElement } from 'lit';
import playerStyles from "../styles/player-styles";

export class PlayerComponent extends LitElement {
  static get styles() {
    return [playerStyles];
  }

  static get properties() {
    return {
     
    };
  }

  constructor() {
    super();
   
  }

  

  render() {
    return html`
    
    `;
  }
}

window.customElements.define('player-component', PlayerComponent);
