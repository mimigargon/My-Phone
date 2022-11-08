import { css } from "lit";

export default css`

  .game {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .grid {
    display: grid;
    justify-content: center;
    align-content: center;
    flex-grow: 1;
    grid-template-columns: repeat(5, 4em);
    grid-template-rows: repeat(6, 4em);
    gap: 0.5em;
    margin: 2em;
  }

  h1, h2 {
    color: white;
    font-weight: bolder;
    font-size: 3em;
    margin: 0;
  }

  


`;
