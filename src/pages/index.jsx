import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";

// CSS
const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;

export default function Home() {
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

        {/* Passado o array atraves de uma props */}
        <ListaPosts posts={arrayPosts} />
      </StyledHome>
    </>
  );
}
