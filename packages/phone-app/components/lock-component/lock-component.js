import { html, LitElement } from 'lit';
import lockStyles from '../../styles/lock-styles';

export class LockComponent extends LitElement {
  static get styles() {
    return [lockStyles]
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

window.customElements.define('lock-component', LockComponent);
