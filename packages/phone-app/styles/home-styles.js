import { css } from 'lit';

export default css`
  #home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
  }

  #applications-container {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    place-content: center space-around;
    margin: -56px 17px 93px 17px;
    height: 680px;
  }

  .application {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
    margin: 4px;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    cursor: pointer;
  }

  p {
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }

  .notification-bubble {
    background-color: #623535;
    border-radius: 70px;
    position: absolute;
    transform: translate(30px, -5px);
    display: flex;
    justify-content: center;
    padding: 2px 4px;
    min-width: 15px;
  }

  .notification-number {
    margin: 0;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }

  #dots {
    color: white;
    margin-top: -100px;
    margin-bottom: -72px;
  }

  #most-used-apps {
    width: 345px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.59);
    border-radius: 40px;
    margin-top: 125px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;
  }
`;
