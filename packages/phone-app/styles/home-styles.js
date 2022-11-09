import {css} from "lit";

export default css `

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
    margin: 20px 0px 197px;
}

#application {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
    margin: 4px;
}

img {
    width: 70px;
    height: 70px;
    border-radius: 15px;
}

p {
    font-size: 15px;
}

#dots {
    color: white;
    margin-top: -100px;
    margin-bottom: -72px;
}

#most-used-apps{
    width: 345px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.59);
    border-radius: 40px;
    margin-top: 125px;
}
`;