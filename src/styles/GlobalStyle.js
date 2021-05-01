import { createGlobalStyle } from "styled-components";

// font-family: 'Abril Fatface', cursive;
// font-family: 'Roboto', sans-serif; 300, 400, 500, 700

export const GlobalStyle = createGlobalStyle`

    :root {
        --font-1: 'Roboto', sans-serif;
        --font-2: 'Abril Fatface', cursive;
        --font-3: 'Poppins', sans-serif;
        --bgBlue: #4f4ff0;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        color: ${(props) => (props.whiteColor ? "white" : "black")};
        font-family: var(--font-3);
    }

    a img {
        border: none;
        outline: none;
    }

    a {
        color: #363636;
        outline: none;
        text-decoration: none;
    }

    a:hover {
        color: #999;
    }
    a,
    a:active,
    a:visited,
    a img {
        outline: none;
    }

    li {
        list-style: none;
    }

    input, textarea, button {
        border: none;
        background-color: transparent;

        &:focus {
            outline: none;
        }
    }

    .tippy-box {
        border-radius: 0.4rem;
    }
`;
