import styled from "styled-components";

export const CardContainer = styled.div`
  background: rgba(30, 30, 30, 0.3);
  backdrop-filter: blur(3px);
  border-radius: 16px;
  border: 3px solid transparent;
  width: 223px;
  height: 300px;
  margin: 3px;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.4);
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.04);
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.6);
    border-color: yellow;
    box-shadow: 0 0 16px 4px rgba(255, 255, 0, 0.3),
      0 0 32px 8px rgba(255, 255, 0, 0.15), 0 8px 32px 0 rgba(0, 0, 0, 0.6);
    color: yellow;
  }
`;

export const CardImage = styled.img<{ dead: boolean }>`
  width: 100%;
  height: 168px;
  object-fit: cover;
  border-radius: 16px;
  filter: ${({ dead }) => (dead ? "grayscale(1)" : "none")};
`;

export const CardInfo = styled.div`
  padding: 18px 12px 20px 12px;
  color: #fff;
  text-align: center;

  h2 {
    margin: 0 0 8px 0;
    font-size: 1.4rem;
    font-family: "Seravek";
    font-weight: 700;
  }

  p {
    margin: 4px 0;
    font-size: 1rem;
    opacity: 0.85;
    font-family: "Nunito", sans-serif;
  }
`;

export const CharactersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  justify-items: center;
  padding: 32px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
