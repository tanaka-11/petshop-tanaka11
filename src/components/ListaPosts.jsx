import Link from "next/link";
import styled from "styled-components";

// CSS
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

export default function ListaPosts({ posts }) {
  // Condicional caso a props.posts esteja vazio
  if (posts.length === 0)
    return (
      <h3 style={{ textAlign: "center" }}>Sem posts disponíveis no momento.</h3>
    );

  return (
    <StyledListaPosts>
      {posts.map((post) => {
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
  );
}
