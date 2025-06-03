import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCharacters } from "../../services/api";
import { type Character } from "../../types/types";
import { Card } from "../../components/Card";
import { CharactersGrid } from "../../components/Card/styles";

export function Characters() {
  const navigate = useNavigate();

  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    // Carrega os personagens quando o componente montar
    async function loadCharacters() {
      const data = await getCharacters();
      setCharacters(data);
    }

    loadCharacters();
  }, []);
  return (
    <>
    <Header />
      <Search /> 
    <div>
        <CharactersGrid>
        {characters.map(character => (
          <Card key={character.id} character={character} />
        ))}
        </CharactersGrid>
    </div>
    </>
  );
}   