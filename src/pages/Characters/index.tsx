import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { useState, useEffect } from "react";
import { getCharacters } from "../../services/api";
import { type Character } from "../../types/types";
import { Card } from "../../components/Card";
import { CharactersGrid } from "../../components/Card/styles";
import { Pagination } from "../../components/Pagination";
import { useSearchParams } from "react-router";
import { Loading } from "../../components/Loading";

export function Characters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const currentPage = Number(searchParams.get("page")) || 1;
  const currentSearch = searchParams.get("search") || "";

  useEffect(() => {
    async function loadCharacters() {
      setIsLoading(true);

      const [data] = await Promise.all([
        getCharacters(currentPage, currentSearch),
        new Promise((resolve) => setTimeout(resolve, 500)),
      ]);

      setCharacters(data.characters);
      setTotalPages(data.total_pages);
      setIsLoading(false);
    }

    loadCharacters();
  }, [currentPage, currentSearch]);

  const handleSearch = () => {
    setSearchParams({ page: "1", search: searchTerm });
  };

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString(), search: currentSearch });
  };

  return (
    <>
      <Header />
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <CharactersGrid>
            {characters.map((character) => (
              <Card key={character.id} character={character} />
            ))}
          </CharactersGrid>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
}
