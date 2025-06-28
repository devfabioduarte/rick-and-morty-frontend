import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 24px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  color: ${({ $active }) => ($active ? "yellow" : "#ccc")};
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
  font-size: 1.2rem;
  margin: 0 6px;
  cursor: pointer;
  outline: none;

  &:hover {
    color: yellow;
  }
`;
