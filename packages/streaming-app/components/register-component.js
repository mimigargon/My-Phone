import { html, css, LitElement } from 'lit';
import registerStyles from "../styles/register-styles";

export class RegisterComponent extends LitElement {
  static get styles() {
    return [registerStyles]
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


window.customElements.define('register-component', RegisterComponent);
