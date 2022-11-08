import { LitElement, html, css } from "lit";

import { KeyboardComponent } from "../components/keyboard-component";
import { LettersComponent } from "../components/letters-component";
import { WORDS } from "../components/words";
import WordleAppStyles from "../styles/WordleApp-styles";
import "@vaadin/button";

export class WordleApp extends LitElement {
  static get styles() {
    return [WordleAppStyles];
  }

  static get properties() {
    return {
      correctWord: {
        type: String,
      },
      isCorrectWord: {
        type: Boolean,
      },
      remainingTries: {
        type: Number,
      },
    };
  }

  constructor() {
    super();
    this.correctWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    this.isCorrectWord = false;
    this.correctWordText = "";
    this.remainingTries = 6;
  }

  handleKeyBoard({ detail: key }) {
    if(this.isCorrectWord) return;

    let allTiles = this.shadowRoot.querySelectorAll("letters-component");
    const activeTiles = [];
    let lastTile = undefined;

    allTiles.forEach((tile) => {
      if (tile.state === "active") {
        activeTiles.push(tile);
      }
      if (lastTile === undefined && tile.letter === "") {
        lastTile = tile;
      }
    });

    switch (key) {
      case "backspace": {
        if (activeTiles.length === 0) return;

        const lastActiveTile = activeTiles[activeTiles.length - 1];
        lastActiveTile.letter = "";
        lastActiveTile.state = "";
        break;
      }
      case "enter": {
        if (activeTiles.length === 5) {
          this.checkWord(activeTiles);
        }
        break;
      }
      default: {
        if (lastTile === undefined) return;
        if (activeTiles.lenght === 5) return;
        lastTile.letter = key;
        lastTile.state = "active";
        break;
      }
    }
  }

  checkWord(activeTiles) {
    const letters = activeTiles.map((tile) => tile.letter);
    const secretLetters = [...this.correctWord];
    this.remainingTries--;

    letters.forEach((letter, index) => {
      if (letter === this.correctWord[index]) {
        secretLetters[index] = "";
      }
    });

    const keyboard = this.shadowRoot.querySelector('keyboard-component');

    activeTiles.forEach((tile, index) => {
      if (tile.letter === this.correctWord[index]) {
        setTimeout(() => {
          tile.flipTile("correct");
          keyboard.setKeysState(tile.letter, "correct")
        }, (index * 500) / 2);
      } else if (secretLetters.indexOf(tile.letter) !== -1) {
        setTimeout(() => {
          tile.flipTile("wrong-location");
          keyboard.setKeysState(tile.letter, "wrong-location")
        }, (index * 500) / 2);
      } else {
        setTimeout(() => {
          tile.flipTile("wrong");
          keyboard.setKeysState(tile.letter, "wrong")
        }, (index * 500) / 2);
      }
    });

     setTimeout(() => {
      this.isCorrectWord = activeTiles
        .map((tile) => tile.state === "correct")
        .every((tile) => tile);

      if (!this.isCorrectWord) return;

      this.setDancingTiles(activeTiles);
      this.correctWordText = "You won!";
    }, (6 * 500) / 2);

      if(this.remainingTries === 0){
        this.correctWordText = "Game Over!";
      }
  }

  setDancingTiles(tiles) {
    tiles.forEach((tile, index) => {
      setTimeout(() => tile.setWinAnimation(), (index * 500) / 5);
    });
  }

  render() {
    return html`
      <div class="game">
        <h1>WORDLE</h1>
        <h2>Tries left: ${this.remainingTries}</h2>
        <div class="grid">
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
          <letters-component></letters-component>
        </div>
        <h1>${this.correctWordText}</h1>
        <keyboard-component
          @key-clicked=${this.handleKeyBoard}
        ></keyboard-component>
      </div>
    `;
  }
}

customElements.define("wordle-app", WordleApp);
