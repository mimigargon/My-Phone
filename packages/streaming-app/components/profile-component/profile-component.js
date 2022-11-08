import { html, LitElement } from 'lit';
import profileStyles from "../../styles/profile-styles";

export class ProfileComponent extends LitElement {
  static get styles() {
    return [profileStyles]
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


window.customElements.define('profile-component', ProfileComponent);
