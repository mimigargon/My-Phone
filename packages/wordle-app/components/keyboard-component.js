import { html, css, LitElement } from 'lit';

import KeyboardComponentStyles from '../styles/KeyboardComponent-styles';

export class KeyboardComponent extends LitElement {
  static get styles() {
    return [KeyboardComponentStyles]
  }

  static get properties() {
    return {
     
    };
  }

  constructor() {
    super();
    
  }

 
  onKeyClicked(event) {
    const key = event.currentTarget.id.toLowerCase();
    this.dispatchEvent(new CustomEvent('key-clicked', {detail: key}))
  }

  setKeysState(letter, state) {
    const key = this.shadowRoot.getElementById(letter.toUpperCase());
    key.classList.add(state);
  }

  render() {
    return html`
    <div class="keyboard">
    <button class="key" id="Q" @click=${this.onKeyClicked}>Q</button>
    <button class="key" id="W" @click=${this.onKeyClicked}>W</button>
    <button class="key" id="E" @click=${this.onKeyClicked}>E</button>
    <button class="key" id="R" @click=${this.onKeyClicked}>R</button>
    <button class="key" id="T" @click=${this.onKeyClicked}>T</button>
    <button class="key" id="Y" @click=${this.onKeyClicked}>Y</button>
    <button class="key" id="U" @click=${this.onKeyClicked}>U</button>
    <button class="key" id="I" @click=${this.onKeyClicked}>I</button>
    <button class="key" id="O" @click=${this.onKeyClicked}>O</button>
    <button class="key" id="P" @click=${this.onKeyClicked}>P</button>
    <div class="space"></div>
    <button class="key" id="A" @click=${this.onKeyClicked}>A</button>
    <button class="key" id="S" @click=${this.onKeyClicked}>S</button>
    <button class="key" id="D" @click=${this.onKeyClicked}>D</button>
    <button class="key" id="F" @click=${this.onKeyClicked}>F</button>
    <button class="key" id="G" @click=${this.onKeyClicked}>G</button>
    <button class="key" id="H" @click=${this.onKeyClicked}>H</button>
    <button class="key" id="J" @click=${this.onKeyClicked}>J</button>
    <button class="key" id="K" @click=${this.onKeyClicked}>K</button>
    <button class="key" id="L" @click=${this.onKeyClicked}>L</button>
    <div class="space"></div>
    <button class="key large" id="enter" @click=${this.onKeyClicked}>Enter</button>
    <button class="key" id="Z" @click=${this.onKeyClicked}>Z</button>
    <button class="key" id="X" @click=${this.onKeyClicked}>X</button>
    <button class="key" id="C" @click=${this.onKeyClicked}>C</button>
    <button class="key" id="V" @click=${this.onKeyClicked}>V</button>
    <button class="key" id="B" @click=${this.onKeyClicked}>B</button>
    <button class="key" id="N" @click=${this.onKeyClicked}>N</button>
    <button class="key" id="M" @click=${this.onKeyClicked}>M</button>
    <button class="key large" id="backspace" @click=${this.onKeyClicked}>Del</button>
    </div>
    `;
  }
}

window.customElements.define('keyboard-component', KeyboardComponent);
