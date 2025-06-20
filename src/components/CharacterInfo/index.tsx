import { useEffect, useState } from "react";
import { getCharacterById } from "../../services/api";
import type { Character } from "../../types/types";
import {
  ModalContainer,
  ModalContent,
  MainImg,
  BlurredBg,
  ImageContainer,
} from "./styles";

export function CharacterDetail({ id }: { id: number }) {
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    if (id) {
      getCharacterById(id).then(setCharacter);
    }
  }, [id]);

  if (!character) return <div>Carregando...</div>;

  return (
    <ModalContainer>
      <ImageContainer>
        <MainImg src={character.image} alt={character.name} />
        <BlurredBg src={character.image} alt={character.name} />
      </ImageContainer>
      <ModalContent>
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Espécie: {character.species}</p>
      </ModalContent>
    </ModalContainer>
  );
}
