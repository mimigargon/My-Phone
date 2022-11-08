import {css} from "lit";

export default css `
:host {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 2em;
  box-sizing: content-box;
}

.tile {
  height: calc(100% - 0.16em);

  color: white;
  border: 0.08em solid hsl(240, 2%, 23%);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  /* Handle flip animation */
  transition: transform 250ms linear;
}

.tile.flip {
  transform: rotateX(90deg);
}

.tile.active {
  border-color: hsl(200, 1%, 34%);
}

.tile.wrong {
  border: none;
  background-color: hsl(240, 2%, 23%);
}

.tile.wrong-location {
  border: none;
  background-color: hsl(49, 51%, 47%);
}

.tile.correct {
  border: none;
  background-color: hsl(115, 29%, 43%);
}

.tile.dance {
  animation: dance 2s ease-in-out infinite;
  animation-delay: 0s;
}

@keyframes dance {
  5% {
    transform: translateY(-50%);
  }

  10% {
    transform: translateY(5%);
  }

  15% {
    transform: translateY(-25%);
  }

  20% {
    transform: translateY(2.5%);
  }

  22% {
    transform: translateY(-5%);
  }

  25% {
    transform: translateY(0);
  }
}
`;