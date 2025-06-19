import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 24px;

  span {
    color: white;
    font-family: "Nunito", sans-serif;
  }
`;

export const PageButton = styled.button`
  background: none;
  border: 2px solid white;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  transition: 0.2s;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
