import { css } from "lit";

export default css`
  .keyboard {
    display: grid;
    grid-template-columns: repeat(20, minmax(auto, 1.25em));
    grid-auto-rows: 3em;
    gap: 0.25em;
    justify-content: center;
  }

  .key{
    font-size: inherit;
    grid-column: span 2;
    border: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(
      var(--hue, 200),
      var(--saturation, 1%),
      calc(var(--lightness-offset, 0%) + var(--lightness, 51%))
    );
    color: white;
    fill: white;
    text-transform: uppercase;
    border-radius: .25em;
    cursor: pointer;
    user-select: none;
  }

  .key.large {
    grid-column: span 3;
  }

  .key:hover, .key:focus {
    --lightness-offset: 10%;
  }
  
  .key.wrong {
    --lightness: 23%;
  }
  
  .key.wrong-location {
    --hue: 49;
    --saturation: 51%;
    --lightness: 47%;
  }
  
  .key.correct {
    --hue: 115;
    --saturation: 29%;
    --lightness: 43%;
  }
`;
