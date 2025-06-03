import { useState } from "react";
import { SearchInput, DivSpaced } from "./style";
import { Button } from "../Button";

export function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
        <DivSpaced>
        <SearchInput
            type="text"
            placeholder="Search characters"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}

        />
        
        <Button link="/characters" text="Search"/>

        </DivSpaced>
    );
}
