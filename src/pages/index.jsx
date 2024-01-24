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
  margin: 1rem;

  button {
    background-color: #151577;
    color: white;
    border-radius: 8px;
    padding: 0.8rem;
    border: none;
    text-transform: capitalize;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: #b3d7f5;
      color: #151577;
      font-weight: bold;
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

  // Filtro
  // const aplicarFiltro = (event) => {
  //   const categoriaSelecionada = event.currentTarget.innerText;
  //   setlistaDePosts(categoriaSelecionada);
  // };

  // const categoriasFiltradas = categorias.filter(
  //   (categoriaFiltrada) => categoriaFiltrada.categorias
  // );

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
          {categorias.map((categoria, indice) => {
            return <button key={indice}>{categoria}</button>;
          })}
        </StyledCategorias>

        {/* Passado props personalizada */}
        <ListaPosts posts={listaDePosts} />
      </StyledHome>
    </>
  );
}
