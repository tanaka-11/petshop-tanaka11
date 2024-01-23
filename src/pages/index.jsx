import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useState } from "react";

// Funções de Servidor(Back-End) - Obrigatorio ser exportada e async.
// Obs. Não importa-la pois causa erro de falha de compilação.
export async function getStaticProps() {
  try {
    // Conexão com a API
    const resposta = await fetch(`http://10.20.46.32:2112/posts`);
    const dados = await resposta.json();

    // Tratativa de erro na resposta
    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    // Comunicação com o componente atraves de um objeto de props
    return {
      props: {
        posts: dados,
      },
    };
  } catch (error) {
    console.error("Erro de conexão: " + error.message);
  }
}

// CSS
const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;

export default function Home({ posts }) {
  // Hooks
  const [listaDePosts, setlistaDePosts] = useState(posts);

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

        {/* Passado props personalizada */}
        <ListaPosts posts={listaDePosts} />
      </StyledHome>
    </>
  );
}
