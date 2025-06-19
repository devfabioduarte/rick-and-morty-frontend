import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { useState } from "react";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header />
      <div>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </>
  );
}
