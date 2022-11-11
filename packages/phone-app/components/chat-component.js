import { html, LitElement } from 'lit';
import chatStyles from '../styles/chat-styles';
import '@polymer/iron-icon';
import '@polymer/iron-icons';
import '@polymer/iron-icons/communication-icons';

export class ChatComponent extends LitElement {
  static get styles() {
    return [chatStyles];
  }

  static get properties() {
    return {
      page: {
        type: String,
      },
      contacts: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.page = 'contact-list';
    this.contacts = [];
    this.contactSelected = [];
  }

  backHome(event) {
    const backHome = event.currentTarget.backHome;
    this.dispatchEvent(new CustomEvent('back-home', { detail: backHome }));
  }

  onContactClicked(contact) {
    this.contactSelected = contact;
    this.page = 'chat-box';
  }

  returnToContacts(){
    this.page = "contact-list";
  }

  render() {
    return html`
      ${this.page === 'contact-list'
        ? html`
            <div id="chat-container">
              <div id="header">
                <div id="arrow" @click=${this.backHome}>
                  <iron-icon icon="icons:arrow-back"></iron-icon>
                </div>
                <h4>Telegram</h4>
                <iron-icon icon="icons:reorder"></iron-icon>
              </div>
              <input
                type="text"
                id="contact-search"
                placeholder="Search for messages and users"
              />
              <div id="chat-contacts">
                ${this.contacts.map(contact => {
                  return html`
                    <div
                      id="contact"
                      @click=${() => {this.onContactClicked(contact)}}
                    >
                      <img src="${contact.avatar}" />
                      <div id="details">
                        <p id="contact-name">${contact.name}</p>
                        <p id="contact-lastMessage">${contact.messages.last}</p>
                      </div>
                      <div id="hour-notification">
                        <div id="hour">
                          <p id="lastMessage-hour">${contact.time}</p>
                        </div>
                        ${contact.messages.seen === false
                          ? html` <div id="notification">
                              <p id="unseen-messages">
                                ${contact.messages.last.length}
                              </p>
                            </div>`
                          : html`<div id="seen-messages">
                              <iron-icon icon="icons:done-all"></iron-icon>
                            </div>`}
                      </div>
                    </div>
                  `;
                })}
              </div>
              <div id="footer">
                <div class="icons-container">
                  <iron-icon icon="communication:contacts"></iron-icon>
                  <p class="icons-name">Contacts</p>
                </div>
                <div class="icons-container">
                  <iron-icon icon="communication:call"></iron-icon>
                  <p class="icons-name">Calls</p>
                </div>
                <div class="icons-container">
                  <iron-icon icon="communication:chat-bubble"></iron-icon>
                  <p class="icons-name">Chats</p>
                </div>
                <div class="icons-container">
                  <iron-icon icon="icons:settings"></iron-icon>
                  <p class="icons-name">Setting</p>
                </div>
              </div>
            </div>
          `
        : html``}
      ${this.page === 'chat-box'
        ? html`
            <div id="chatBox-container">
              <div id="chatBox-header">
                    <div @click="${this.returnToContacts}">
                      <iron-icon icon="icons:arrow-back"></iron-icon>
                    </div>
                    <img id="contact-image" src="${this.contactSelected.avatar}" />
                    <h4>${this.contactSelected.name}</h4>
              </div>
              <div id="messages-container">
              ${this.contactSelected.messages.previous.map(message => {
                return html `
                <div class="contact-message">
                ${message}
                </div>
                `
              })}
              ${this.contactSelected.messages.last.map(message => {
                return html `
                <div class="contact-message">
                ${message}
                </div>
                `
              })}
              </div>
            </div>
          `
        : html``}
    `;
  }
}

window.customElements.define('chat-component', ChatComponent);
