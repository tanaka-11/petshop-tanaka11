import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";

// CSS
const StyledPost = styled.article`
  h2::before {
    content: "📌 ";
  }
`;

// Funções de Servidor
// Obs. Obrigatorio ser exportada e async. Não importa-la pois causa erro de falha de compilação.
export async function getStaticProps({ params }) {
  const { id } = params;
  console.log(id);
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function Post() {
  return (
    <>
      <Head>
        <title>Titulo - PetShop</title>
        <meta name="description" content="Descrição" />
      </Head>

      <StyledPost>
        <h2>Titulo...</h2>

        <Container>
          <h3>Categoria...</h3>
          <p>Descrição...</p>
        </Container>
      </StyledPost>
    </>
  );
}
