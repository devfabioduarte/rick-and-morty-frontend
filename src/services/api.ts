import type { Character } from "../types/types";

const apiUrl = import.meta.env.VITE_API_URL;

export async function getCharacters(
  page: number = 1,
  search?: string
): Promise<{
  characters: Character[];
  total_pages: number;
  current_page: number;
}> {
  try {
    const searchParam = search ? `&name=${search}` : "";
    const response = await fetch(
      `${apiUrl}characters/?page=${page}${searchParam}`
    );

    const data = await response.json();

    return {
      characters: data.success.characters,
      total_pages: data.success.total_pages,
      current_page: data.success.current_page,
    };
  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    return { characters: [], total_pages: 0, current_page: 1 };
  }
}

export async function getCharacterById(id: number): Promise<Character | null> {
  try {
    const response = await fetch(`${apiUrl}/characters/${id}`);
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error(`Erro ao buscar personagem ${id}:`, error);
    return null;
  }
}
