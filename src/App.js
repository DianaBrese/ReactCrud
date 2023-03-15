import React, { Component } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useParams,
} from "react-router-dom";
import Menu from "./components/Menu";
import TabelaLivros from "./components/TabelaLivros";
import CadastrarLivros from "./components/CadastrarLivros";
import NotFound from "./components/NotFound";

class App extends Component {
  state = {
    livros: JSON.parse(localStorage.getItem("livros")),
    redirecionar: false
  };

  inserirLivro = async (livro) => {
    livro.id = this.state.livros.length + 1;
    await this.setState({
      livros: [...this.state.livros, livro],
    });
    let storage = localStorage.getItem("livros");
    storage = JSON.parse(storage);

    storage.push(livro);

    localStorage.setItem("livros", JSON.stringify(storage));
  };

  editarLivro = async (livro) => {
    const index = this.state.livros.findIndex((p) => p.id === livro.id);
    const livros = this.state.livros
      .slice(0, index)
      .concat(this.state.livros.slice(index + 1));
    const newLivros = [...livros, livro].sort((a, b) => a.id - b.id);
   await this.setState({
      livros: newLivros,
    });
    localStorage.setItem("livros", JSON.stringify(this.state.livros));
    this.setState({ redirecionar: true })
  
  };

  removerLivro = (livro) => {
    if (window.confirm("Remover esse livro?")) {
      const livros = this.state.livros.filter((p) => p.isbn !== livro.isbn);
      this.setState({ livros });

      localStorage.setItem("livros", JSON.stringify(livros));
    }
  };

  render() {
    if (this.state.redirecionar === true) {
      window.location.href = "/";
    }
    const Wrapper = (props) => {
      const { isbnLivro } = useParams();
      const livro = this.state.livros.find((livro) => livro.isbn === isbnLivro);
      if (livro) {
        return <CadastrarLivros livro={livro} editarLivro={this.editarLivro} />;
      } else {
        return <Navigate replace to="/" />;
      }

      
    };

    return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route
            path="/"
            element={
              <TabelaLivros
                livros={this.state.livros}
                removerLivro={this.removerLivro}
              />
            }
          ></Route>
          <Route
            path="/cadastrar"
            element={
              <CadastrarLivros
                inserirLivro={this.inserirLivro}
                livro={{ id: 0, isbn: "", titulo: "", autor: "" }}
              />
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route exact path="/editar/:isbnLivro" element={<Wrapper />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
