import { css } from 'lit';

export default css`
  #chat-container {
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;
    max-height: 760px;
  }

  #header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 345px;
    height: 75px;
    margin-top: 20px;
  }

  h4 {
    font-size: 20px;
  }

  #chat-contacts {
    display: flex;
    flex-direction: column;
    min-width: 370px;
    min-height: 600px;
    background-color: rgb(14, 14, 14);
  }

  #contact-search {
    background-color: rgba(0, 0, 0, 0.42);
    border: none;
    margin-bottom: 15px;
    text-align: center;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    width: 360px;
  }

  #contact {
    display: flex;
    align-items: center;
    place-content: center space-between;
    max-height: 70px;
    margin: 25px 10px;
    cursor: pointer;
  }

  #details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
  }

  #contact-name {
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }

  #contact-lastMessage {
    font-size: 13px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: rgba(255, 255, 255, 0.35);
    min-width: 185px;
  }

  #hour-notification {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    place-content: center space-around;
    font-size: 13px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    margin-left: 20px;
  }

  #hour {
    color: rgba(255, 255, 255, 0.35);
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    margin: -10px 0px 5px;
  }

  #notification {
    background-color: #623535;
    border-radius: 50px;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    margin-top: 18px;
  }

  #seen-messages {
    color: #623535;
  }

  img {
    height: 80px;
    weight: 80px;
    border-radius: 50px;
  }

  #footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    align-content: center;
    width: 285px;
    margin-top: 15px;
  }

  .icons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icons-name {
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: rgba(255, 255, 255, 0.35);
  }
  
  #chatBox-container {

  }

  #chatBox-header {
    
  }
`;
