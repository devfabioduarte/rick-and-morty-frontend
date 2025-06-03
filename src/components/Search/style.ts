import styled from "styled-components";

export const SearchInput = styled.input`
    padding: 8px 16px;
    font-size: 16px;
    border: 2px solid white;
    border-radius: 8px;
    background: none;
    color: white;
    font-family: 'Nunito', sans-serif;
    position: sticky;
    top: 40%;
    left: 35%;
    

    &::placeholder {
        color: #ffffff80;
    }

`;

export const DivSpaced = styled.div`
  padding: 70px;
  display: flex;
  align-items:center;
  justify-content: center;
  gap: 16px;
`;

// <SearchButton onClick={() => navigate('/loading')}>Search</SearchButton>