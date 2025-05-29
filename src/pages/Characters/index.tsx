import { Header } from "../../components/Header";
import { SearchButton } from "../../components/Button/style";
import { Search } from "../../components/Search";

export function Characters() {
  return (
    <>
    <Header />
    <div>
      <Search /> {/* Barra de pesquisa com botão */}
      <SearchButton as="a" href="/">Search</SearchButton>
    </div>
    </>
  );
}   