import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useEffect, useState } from "react";

// CSS
const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;

export default function Home() {
  const [listaDePosts, setlistaDePosts] = useState([]);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch(`http://10.20.46.32:2112/posts`);
        const dados = await resposta.json();
        setlistaDePosts(dados);
      } catch (error) {
        console.error("Erro: " + error);
      }
    };
    carregarDados();
  }, []);

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
