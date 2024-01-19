import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/Container";

// CSS
const StyledProdutos = styled.section`
  h2::before {
    content: "🎁 ";
  }

  article {
    padding: 0.8rem;
  }

  @media screen and (min-width: 768px) {
    div {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      font-size: 1.3rem;
    }
  }
`;

export default function Produtos() {
  return (
    <>
      <Head>
        <title>Produtos - PetShop</title>
        <meta name="description" content="Serviços destinados ao seu pet" />

        <meta
          name="keywords"
          content="ração, banho, tosa, brinquedos, remédio"
        />
      </Head>

      <StyledProdutos>
        <h2>Conheça nossos produtos!</h2>

        <Container>
          <article>
            <h3>Banho</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              perferendis quasi saepe amet dicta pariatur quos labore mollitia
              qui dolores.
            </p>
          </article>

          <article>
            <h3>Tosa</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              perferendis quasi saepe amet dicta pariatur quos labore mollitia
              qui dolores.
            </p>
          </article>

          <article>
            <h3>Castração</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              perferendis quasi saepe amet dicta pariatur quos labore mollitia
              qui dolores.
            </p>
          </article>
        </Container>
      </StyledProdutos>
    </>
  );
}
