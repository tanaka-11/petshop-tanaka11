import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useState } from "react";
import serverApi from "./api/server";

// CSS
const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;

const StyledCategorias = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 1rem 0;
  /* padding: 0.8rem; */

  button {
    background-color: #4ba3c3;
    color: #fff;
    border-radius: 8px;
    padding: 0.8rem;
    /* margin: 0.3rem; */
    border: none;
    text-transform: capitalize;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: #246177;
      color: #f7f7f7;
    }

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

// Função de Servidor(Back-End, SSR)
// Obs. Obrigatorio ser exportada e async. Não importa-la pois causa erro de falha de compilação.
export async function getStaticProps() {
  try {
    // Conexão com a API
    const resposta = await fetch(`${serverApi}/posts`);

    // Tratativa de erro na resposta
    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    // Guardando os dados em formato json()
    const dados = await resposta.json();

    // Extração das categorias
    const categorias = dados.map((post) => post.categoria);

    // Gerando um novo array de categorias sem repetição com o Set()
    const categoriasUnica = [...new Set(categorias)];

    // Comunicação com o componente atraves de um objeto de props
    return {
      props: {
        posts: dados,
        categorias: categoriasUnica,
      },
    };
  } catch (error) {
    console.error("Erro de conexão: " + error.message);

    // Return com Flag "notFound" para rota dinamica
    return {
      notFound: true,
    };
  }
}

// Componente
export default function Home({ posts, categorias }) {
  // Hooks
  const [listaDePosts, setlistaDePosts] = useState(posts);
  const [filtroAtivo, setfiltroAtivo] = useState(false);

  // Filtro
  const aplicarFiltro = (event) => {
    // Selecionando a categoria
    const categoriaSelecionada = event.currentTarget.textContent;

    // Filtrando
    const listaDePostFiltrados = posts.filter(
      (post) => post.categoria === categoriaSelecionada
    );
    setlistaDePosts(listaDePostFiltrados);

    // State do Filtro
    setfiltroAtivo(true);
  };

  const limparFiltro = () => {
    // State do Filtro
    setfiltroAtivo(false);
    // Passando dados com a props desestruturada vinda da API
    setlistaDePosts(posts);
  };

  return (
    <>
      <Head>
        <title>PetShop Tanaka-11</title>
        <meta
          name="description"
          content="Web App Petshop criado no curso de Téc. em Informática para Internet com o framework Next.js"
        />

        <meta
          name="keywords"
          content="pets, petshop, cachorro, gato, ração, banho"
        />
      </Head>

      <StyledHome>
        <h2>Pet Notícias</h2>

        <StyledCategorias>
          {/* Botão de categorias */}
          {categorias.map((categoria, indice) => {
            return (
              <button key={indice} onClick={aplicarFiltro}>
                {categoria}
              </button>
            );
          })}

          {/* Limpa filtro com renderização condicional */}
          {filtroAtivo && (
            <button className="botaoLimpar" onClick={limparFiltro}>
              Limpar
            </button>
          )}
        </StyledCategorias>

        {/* Passado props personalizada */}
        <ListaPosts posts={listaDePosts} />
      </StyledHome>
    </>
  );
}
