import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import arrayPosts from "./api/array-posts";

// CSS
const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;

const StyledListaPosts = styled.div`
  article {
    background-color: #f7f7f7;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    transition: transform 200ms;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }

    & a {
      text-decoration: none;
      color: #000;

      &:hover,
      &:focus {
        color: #0d0da7;
      }
    }
  }

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    article {
      width: 49%;
    }
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

        <StyledListaPosts>
          {arrayPosts.map((post) => {
            return (
              <article key={post.id}>
                <Link href="">
                  <h3>{post.titulo}</h3>
                  <p>{post.subtitulo}</p>
                </Link>
              </article>
            );
          })}
        </StyledListaPosts>
      </StyledHome>
    </>
  );
}
