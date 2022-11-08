import { html, LitElement } from 'lit';
import homeStyles from '../../styles/home-styles';

export class HomeComponent extends LitElement {
  static get styles() {
    return [homeStyles]
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


window.customElements.define('home-component', HomeComponent);
