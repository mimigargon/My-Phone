import {css} from "lit";

export default css `
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
    height: 70px;
}

#chat-contacts {
    display: flex;
    flex-direction: column;
    min-width: 340px;
    max-height: 700px;
}

#contact-search {
    background-color: #0000006b;
    border: none;
    margin-bottom: 15px;
    text-align: center;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

#contact {
    display: flex;
    align-items: flex-start;
    place-content: center space-between;
    margin-bottom: 40px;
}

img {
    height: 100px;
    weight: 100px;
    border-radius: 50px;
}
`;