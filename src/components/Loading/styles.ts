import styled from "styled-components";

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.h1`
  color: white;
  font-family: "Nunito", sans-serif;
  font-size: 24px;
`;

export const LoadingImage = styled.img`
  width: 200px;
  height: 200px;
`;
