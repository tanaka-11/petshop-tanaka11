import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import ListaCategorias from "@/components/ListaCategorias";
import serverApi from "./api/server";
import { useState } from "react";

// CSS
const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
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
  const [listaDePosts, setListaDePosts] = useState(posts);
  const [filtroAtivo, setFiltroAtivo] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState("");

  // Filtro
  const aplicarFiltro = (event) => {
    // Selecionando a categoria e passando a escrita do botão
    const categoriaSelecionada = event.currentTarget.textContent;

    // Filtrando
    const listaDePostFiltrados = posts.filter(
      (post) => post.categoria === categoriaSelecionada
    );

    // States da Categoria
    setFiltroAtivo(true); // Boolean para saber se o filtro está "ativo"
    setListaDePosts(listaDePostFiltrados); // Atualização dos posts se filtro estiver "ativo" (Selecionar posts da categoria escrita no botão)
    setCategoriaAtiva(categoriaSelecionada); // Categoria selecionada pelo botão
  };

  const limparFiltro = () => {
    // State do Filtro
    setFiltroAtivo(false); // Boolean para saber se o filtro está "desativado"
    setListaDePosts(posts); // Atualização dos posts se filtro estiver "desativado" (volte mostrar todos posts)
    setCategoriaAtiva(""); // Voltando para nenhuma categoria selecionada pelo botão
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

        <ListaCategorias
          categorias={categorias}
          categoriaAtiva={categoriaAtiva}
          filtroAtivo={filtroAtivo}
          aplicarFiltro={aplicarFiltro}
          limparFiltro={limparFiltro}
        />

        {/* Passado props personalizada */}
        <ListaPosts posts={listaDePosts} />
      </StyledHome>
    </>
  );
}
