import { useState } from "react";
import { SearchInput } from "./style";

export function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
        <SearchInput
            type="text"
            placeholder="Search characters"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
        />
    );
}
