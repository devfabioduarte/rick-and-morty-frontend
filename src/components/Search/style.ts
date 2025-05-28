import styled from "styled-components";

export const SearchInput = styled.input`
    padding: 8px 16px;
    font-size: 16px;
    border: 2px solid white;
    border-radius: 8px;
    background: none;
    color: white;
    font-family: 'Nunito', sans-serif;
    width: 250px;
    position: absolute;
    top: 40%;
    left: 35%;

    &::placeholder {
        color: #ffffff80;
    }

`;