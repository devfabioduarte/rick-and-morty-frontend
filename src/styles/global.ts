import { createGlobalStyle } from "styled-components";
import backgroundImage from '../assets/img/background.jpg';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap');
    
    :root {
        --primary-color: #1E1E1E
    }

*   {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-image: url(${backgroundImage});
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: top center;
        background-color: var(--primary-color);
        
    }
`;