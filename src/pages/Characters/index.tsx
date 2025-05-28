import { Header } from "../../components/Header";
import { SearchButton } from "../../components/Button/style";

export function Characters () {
  return (
    <>
    <Header />
    <div>
      <SearchButton as="a" href="/">Search</SearchButton>
    </div>
    </>
  );
}   