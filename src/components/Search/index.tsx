import { SearchInput, DivSpaced } from "./style";
import { Button } from "../Button";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSearch?: () => void;
}

export function Search({ searchTerm, setSearchTerm }: SearchProps) {
  const searchUrl = `/characters?search=${searchTerm}`;
  return (
    <DivSpaced>
      <SearchInput
        type="text"
        placeholder="Search characters"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button link={searchUrl} text="Search" />
    </DivSpaced>
  );
}
