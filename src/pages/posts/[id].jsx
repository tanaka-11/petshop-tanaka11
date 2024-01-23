import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import serverApi from "../api/server";

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

  try {
    // Conexão com a API e Rota Dinamica
    const resposta = await fetch(`${serverApi}/posts/${id}`);

    // Tratativa de erro na resposta
    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    // Guardando os dados em formato json()
    const dados = await resposta.json();

    // Comunicação com o componente atraves de um objeto de props
    return {
      props: {
        post: dados,
      },
    };
  } catch (error) {
    console.error("Erro de conexão: " + error.message);
  }
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
