import { css } from 'lit';

export default css`
  #lock-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-content: center;
  }

  #lock-icon {
    margin-bottom: -70px;
    margin-top: 20px;
  }

  #lock-hour {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    font-size: 80px;
    font-weight: lighter;
  }

  #date {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
      font-weight: lighter;
      margin-top: -60px;
      font-size: 23px;
      margin-bottom: 50px;
  }

  #lock-notifications {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    place-content: center;
    justify-content: center;
    align-content: center;
    margin-bottom: 10px;
    margin-top: -20px;
  }

  #notification {
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: lighter;
    font-size: 15px;
    background-color: #ffffff75;
    border-radius: 10px;
    padding: 5px 150px 5px 10px;
    margin-bottom: 15px;
  }

  #notification-name {
    color: #323232;
    font-weight: bolder;
    text-transform: uppercase;
  }

  #notification-message {
    color: black;
    font-weight: normal;
  }

  img {
    width: 20px;
    border-radius: 5px;
    margin-right: 10px;
  }

  #footer-icons {
    display: flex;
    align-items: center;
    place-content: center space-between;
  }

  #lantern {
    margin-right: 100px;
    border-radius: 50px;
    background-color: #5a5858e8;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
  }

  #camera {
    margin-left: 100px;
    border-radius: 50px;
    background-color: #5a5858e8;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
  }

  #bar {
    background-color: white;
    width: 197px;
    height: 5px;
    border-radius: 20px;
    margin-top: 20px;
  }
`;
