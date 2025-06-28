import { useEffect, useState } from "react";
import { getCharacterById } from "../../services/api";
import type { Character } from "../../types/types";
import { Users } from "lucide-react";
import {
  translateGender,
  getStatusPhrase,
  getDimension,
  getResidentsCount,
  getName,
  getType,
} from "../../utils/translateGender";
import {
  ModalContainer,
  ModalContent,
  MainImg,
  BlurredBg,
  BlurredImageContainer,
  ImageContainer,
  CloseButton,
  Title,
  Text,
} from "./styles";

export function CharacterDetail({
  id,
  onClose,
}: {
  id: number;
  onClose: () => void;
}) {
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    if (id) {
      getCharacterById(id).then(setCharacter);
    }
  }, [id]);

  if (!character) return <div>Carregando...</div>;

  return (
    <ModalContainer>
      <BlurredImageContainer>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <BlurredBg src={character.image} alt={character.name} />
      </BlurredImageContainer>
      <ModalContent>
        <ImageContainer>
          <MainImg src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <p>{character.species}</p>
        </ImageContainer>
        <Text>
          <Title>ABOUT</Title>
          <p>
            {character.name} is a {translateGender(character.gender)}{" "}
            {character.species.toLocaleLowerCase()}.{" "}
            {getStatusPhrase(character.gender, character.status)} Last seen in{" "}
            {character.last_seen}
          </p>

          <Title>ORIGIN</Title>
          <h4>{getType(character.origin)}</h4>
          <h2>{getName(character.origin)}</h2>
          <h3>{getDimension(character.origin)}</h3>
          {getName(character.location) !== "Unknown" && (
            <h4>
              <Users />
              {getResidentsCount(character.origin)} residents
            </h4>
          )}

          <Title>LOCATION</Title>
          <h4>{getType(character.location)}</h4>
          <h2>{getName(character.location)}</h2>
          <h3>{getDimension(character.location)}</h3>
          {getName(character.location) !== "Unknown" && (
            <h4>
              <Users />
              {getResidentsCount(character.location)} residents
            </h4>
          )}
        </Text>
      </ModalContent>
    </ModalContainer>
  );
}
