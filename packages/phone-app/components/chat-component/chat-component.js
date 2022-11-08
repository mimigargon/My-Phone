import { html, LitElement } from 'lit';
import chatStyles from '../../styles/chat-styles';

export class ChatComponent extends LitElement {
  static get styles() {
    return [chatStyles]
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


window.customElements.define('chat-component', ChatComponent);
