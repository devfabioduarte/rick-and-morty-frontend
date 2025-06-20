import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const ModalContent = styled.div`
  background: rgb(0, 0, 0);
  padding: 20px;
  border-radius: 8px;
  width: 600px;
  color: white;
  font-family: "Nunito", sans-serif;

  h2 {
    margin-bottom: 16px;
    font-size: 24px;
  }

  p {
    margin-bottom: 16px;
    font-size: 16px;
  }

  button {
    background-color: #ff4757;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #ff6b81;
    }
  }
`;

export const ImageContainer = styled.div`
  position: fixed;
  width: 240px;
  height: 240px;
  margin: 0 auto;
`;

export const BlurredBg = styled.img`
  position: fixed;
  inset: 0;
  width: 40%;
  height: 100%;
  object-fit: cover;
  filter: blur(16px);
  opacity: 0.7;
  z-index: 0;
  border-radius: 12px;
`;

export const MainImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  border-radius: 12px;
`;
