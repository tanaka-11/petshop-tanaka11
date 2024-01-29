import styled from "styled-components";

const StyledCategorias = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 1rem 0;

  button {
    background-color: #4ba3c3;
    color: #fff;
    border-radius: 8px;
    padding: 0.8rem;
    margin: 0.3rem;
    border: none;
    text-transform: capitalize;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: #246177;
      color: #f7f7f7;
    }

    /* Classe para destaque do botão selecionado */
    &.ativo {
      background-color: #246177;
    }

    /* Classe para o botão limpar */
    &.botaoLimpar {
      background-color: #8d0505c9;

      &:hover,
      &:focus {
        background-color: darkred;
      }

      &::before {
        content: " 🧹";
      }
    }
  }
`;

export default function ListaCategorias({
  categorias,
  categoriaAtiva,
  filtroAtivo,
  onAplicarFiltro,
  onLimparFiltro,
}) {
  return (
    <StyledCategorias>
      {/* Botão de categorias */}
      {categorias.map((categoria, indice) => {
        return (
          <button
            key={indice} // Indice(ID) do botão atraves do parametro
            className={categoria === categoriaAtiva ? "ativo" : ""} // Programação de destaque do botão
            onClick={onAplicarFiltro} // Aplicação do filtro
          >
            {categoria}
          </button>
        );
      })}

      {/* Limpa filtro com renderização condicional */}
      {filtroAtivo && (
        <button className="botaoLimpar" onClick={onLimparFiltro}>
          Limpar
        </button>
      )}
    </StyledCategorias>
  );
}
