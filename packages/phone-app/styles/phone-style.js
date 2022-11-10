import { css } from 'lit';

export default css`
  #global-container {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-top: 30px;
  }

  #exterior-border {
    justify-content: center;
    align-items: center;
    border: 10px solid rgb(18 17 17);
    width: 390px;
    height: 844px;
    border-radius: 70px;
    background-image: url(https://wallpapercave.com/wp/wp9394967.jpg);
    background-size: cover;
    color: white;
  }

  #app-container {
    border: 10px solid black;
    width: 370px;
    height: 824px;
    border-radius: 62px;
    display: flex;
    align-items: center;
    flex-direction: column;
    place-content: center;
    justify-content: center;
    align-content: center;
  }

  #header {
    display: flex;
    align-items: flex-start;
    margin-top: -20px;
    place-content: center;
    margin-left: 70px;
    
  }

  #left {
    font-size: 13px;
    margin: 12px 20px 0px -60px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  #notch {
    background-color: black;
    width: 176px;
    border-radius: 0px 0px 20px 20px;
    height: 33px;
  }

  #right {
    margin: 3px;
  }

  iron-icon {
    width: 16px;
    margin: 3px;
  }

  #button-container {
    margin-top: -643px;
    margin-left: -245px;
  }

  #lock-unlock {
    background-color: rgb(18 17 17);
    margin: -32px 639px;
    width: 5px;
    height: 114px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }

  .notch-positioner {
    margin: 0px -70px 804px -10px;
  }

  chat-component{
    height: 768px;
  }

`;
