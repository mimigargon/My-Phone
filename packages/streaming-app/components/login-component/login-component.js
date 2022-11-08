import { html, LitElement } from 'lit';
import loginStyles from "../../styles/login-styles";

export class LoginComponent extends LitElement {
  static get styles() {
    return [loginStyles];
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
window.customElements.define('login-component', LoginComponent);
