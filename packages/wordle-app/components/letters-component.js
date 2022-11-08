import { html, css, LitElement } from "lit";

import LettersComponentStyles from "../styles/LettersComponent-styles";

export class LettersComponent extends LitElement {
  static get styles() {
    return [LettersComponentStyles];
  }

  static get properties() {
    return {
      state: {
        type: String,
      },
      letter: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.letter = "";
    this.state = "";
  }

  updated(_changedProperties){
    if(_changedProperties.has("letter")){
      const tile = this.shadowRoot.getElementById('tile');

      if(this.letter === ""){
        tile.classList.remove('active');
      }else{
        tile.classList.add("active");
      }
    }
  }

  flipTile(state) {
    const tile = this.shadowRoot.getElementById('tile');
    tile.classList.add("flip");
    tile.addEventListener("transitionend", () => {
      this.state = state;
      this._removeFlip();
    })
  }

  setWinAnimation() {
    const tile = this.shadowRoot.getElementById('tile');
    tile.classList.add("dance")
  }

  _removeFlip() {
    const tile = this.shadowRoot.getElementById('tile');
    tile.classList.remove("flip")
  }

  render() {
    return html`
    <div id="tile" class="tile ${this.state}">${this.letter}</div>
    `;
  }
}

window.customElements.define("letters-component", LettersComponent);
