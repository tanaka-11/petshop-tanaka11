import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import serverApi from "../api/server";

// CSS
const StyledPost = styled.article`
  h2::before {
    content: "📌 ";
  }

  h3 {
    text-transform: capitalize;
  }
`;

// Funções de Servidor com Parametro
// Obs. Obrigatorio ser exportada e async. Não importa-la pois causa erro de falha de compilação.
export async function getStaticProps({ params }) {
  // Parametro com Props Desestruturado
  const { id } = params;

  try {
    // Conexão com a API e Rota Dinamica
    const resposta = await fetch(`${serverApi}/posts/${id}.json`);

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

    // Return com Flag "notFound" para rota dinamica
    return {
      notFound: true,
    };
  }
}

// Função obrigatoria para rota dinâmica
export async function getStaticPaths() {
  // Retorna objeto com dois parametros
  // 1º - "paths" que inicializa vazio e é gerado o caminho no momento que a pagina for aberta.
  // 2º - "fallback" garante que a pagina so vai ser renderizada apos a conclusão da geração da pagina.
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function Post({ post }) {
  const tituloPagina = `${post.titulo} - Petshop`;

  return (
    <>
      <Head>
        <title>{tituloPagina}</title>
        <meta name="description" content={post.descricao} />
      </Head>

      <StyledPost>
        <h2>{post.titulo}</h2>

        <Container>
          <h3>{post.categoria}</h3>
          <p>{post.descricao}</p>
        </Container>
      </StyledPost>
    </>
  );
}
