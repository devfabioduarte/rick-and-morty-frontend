export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender: string;
  origin: {
    name: string;
    dimension: string;
    residents_count?: string;
    type?: string;
  };
  location: {
    name: string;
    dimension?: string;
    residents_count?: string;
    type?: string;
  };
  image: string;
  episode: string[];
  url: string;
  last_seen: string;
}

export interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleSearch: () => void;
}

export interface CharacterCardProps {
  character: Character;
}
