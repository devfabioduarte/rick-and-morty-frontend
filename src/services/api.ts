import type { Character } from '../types/types';

const apiUrl = import.meta.env.VITE_API_URL;

export async function getCharacters(): Promise<Character[]> {
  try {
    
    // Busca todos os personagens do banco de dados através do endpoint /characters
    console.log('Chamando API:', `${apiUrl}characters`);
    const response = await fetch(`${apiUrl}characters`);
    
    const data = await response.json();
    console.log('Dados recebidos:', data);
    return data.success.characters;
  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    return [];
  }
}

// Opcional: função para buscar um personagem específico por ID
export async function getCharacterById(id: number): Promise<Character | null> {
  try {
    const response = await fetch(`${apiUrl}/characters/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Erro ao buscar personagem ${id}:`, error);
    return null;
  }
}