import { Header } from "../../components/Header";
import { SearchButton } from "../../components/Button/style";
import { Search } from "../../components/Search";
import { useNavigate } from "react-router-dom";

export function Home () {
  const navigate = useNavigate();
  return (
    <>
    <Header />
    <div>
      <Search /> {/* Barra de pesquisa com botão */}
      <SearchButton onClick={() => navigate('/loading')}>
      Search
      </SearchButton>
    </div>
    </>
  );
}   