import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const ModalContent = styled.div`
  background: rgb(0, 0, 0);
  border-radius: 8px;
  height: 900px;
  width: 900px;
  color: white;

  max-width: 95vw;
  max-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;

  h2 {
    margin-bottom: 16px;
    font-size: 24px;
  }

  p {
    margin-bottom: 16px;
    font-size: 16px;
  }
`;

export const BlurredImageContainer = styled.div`
  position: relative;
  width: 500px;
  height: 900px;
  max-width: 95vw;
  max-height: 95vh;
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const BlurredBg = styled.img`
  position: absolute;
  width: 550px;
  height: 900px;
  object-fit: cover;
  filter: blur(20px) brightness(0.5);
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.5);
`;

export const MainImg = styled.img`
  position: relative;
  width: 500px;
  height: 600px;
  object-fit: cover;
  z-index: 2;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 100px;
  background: none;
  border: 3px solid white;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 3;
  border-radius: 12px;
  padding: 10px 16px;
  right: 75%;
`;

export const ImageContainer = styled.div`
  position: relative;
  right: 850px;
  top: 50px;
  display: grid;
  max-width: 95vw;
  max-height: 95vh;
  align-items: center;
  grid-template-columns: 1fr;
  background: black;
  border-radius: 13px;
  border: 2px solid rgba(161, 155, 155, 0.8);
  z-index: 1;
  font-family: "Nunito", sans-serif;

  h1 {
    font-size: 32px;
    margin-bottom: 20px;
    padding: 10px;
    text-align: center;
    color: white;
  }

  p {
    margin-bottom: 16px;
    font-size: 20px;
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
  text-align: right;
  letter-spacing: 10px;
  color: yellow;
`;

export const Text = styled.div`
  position: absolute;
  left: 0;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  font-size: 18px;
  color: white;
  font-family: "Nunito", sans-serif;

  h2 {
    margin-bottom: 10px;
    font-size: 45px;
    color: white;
  }

  h3 {
    margin-bottom: 10px;
    font-size: 30px;
  }

  h4 {
    margin-bottom: 10px;
    font-size: 25px;
    gap: 10px;
    color: #ffffff80;
    display: inline-flex;
    align-items: center;
  }
  p {
    margin-bottom: 16px;
    font-size: 25px;
  }
`;
