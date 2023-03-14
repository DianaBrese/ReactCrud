import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>404!</h1>
      <p>
        Lamento. Essa página não existe ou foi removida <br />
        <Link to="/">Voltar para Tabela de livros</Link>
      </p>
    </>
  );
}
 export default NotFound