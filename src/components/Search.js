import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import api from "../services/api";

function Search() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState("");

  async function handleSearch() {
    if (input === "") {
      alert("Preencha com algum cep!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Cep inválido!");
      setInput("");
      setCep("");
    }
  }

  return (
    <div className="containerSearch">
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <div className="containerResult">
          <main className="main">
            <h2>{cep.cep}</h2>
            <span>{cep.logradouro}</span>
            <span>{cep.bairro}</span>
            <span>
              {cep.localidade} - {cep.uf}
            </span>
          </main>
        </div>
      )}
    </div>
  );
}

export default Search;
