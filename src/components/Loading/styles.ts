import styled from 'styled-components';

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const LoadingImage = styled.img`
  width: 200px;
  height: 200px;
  animation: spin 2s linear infinite;`
