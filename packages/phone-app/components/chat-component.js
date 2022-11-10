import { html, LitElement } from 'lit';
import chatStyles from '../styles/chat-styles';
import "@polymer/iron-icon";
import "@polymer/iron-icons";

export class ChatComponent extends LitElement {
  static get styles() {
    return [chatStyles]
  }

  static get properties() {
    return {
      page: {
        type: String,
      },
      contacts: {
        type: Array,
      }
    };
  }

  constructor() {
    super();
    this.page = "contact-list";
    this.contacts = [];
  }

 

  render() {
    return html`
     ${this.page === "contact-list" ? html `
     <div id="chat-container">
      <div id="header">
        <iron-icon icon="icons:arrow-back"></iron-icon>
        <h4>Telegram</h4>
        <iron-icon icon="icons:reorder"></iron-icon>
      </div>
      <div id="chat-contacts">
      <input type="text" id="contact-search" placeholder="Search for messages and users">
        ${this.contacts.map(contact => {
          return html `
            <div id="contact">
            <img src="${contact.avatar}">
            <div id="details">
              <p id="contact-name">${contact.name}</p>
              <p id="contact-lastMessage">${contact.messages.last.length -1}</p>
            </div>
            <div id="hour-notification">
            <div id="hour">
              <p id="lastMessage-hour">${contact.time}</p>
            </div>
              ${contact.messages.seen === false ? html `
              <div id="notification">
                <p id="unseen-messages">${contact.messages.last.length}</p>
              </div>` : html `<div id="seen-messages"><iron-icon icon="icons:done-all"></iron-icon></div>`}
            </div>
            </div>
          `
        })}
      </div>
     </div>
     ` : html ``}
    `;
  }
}


window.customElements.define('chat-component', ChatComponent);
