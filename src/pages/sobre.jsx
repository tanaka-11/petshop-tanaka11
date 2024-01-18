import Head from "next/head";
import styled from "styled-components";

// CSS
const StyledSobre = styled.section`
  h2::before {
    content: "💡 ";
  }
`;

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - PetShop</title>
        <meta
          name="description"
          content="Missão, visão e valores do nosso PetShop"
        />
        <meta name="keywords" content="pets, petshop, cachorro, gato" />
      </Head>

      <StyledSobre>
        <h2>Sobre nosso PetShop</h2>
      </StyledSobre>
    </>
  );
}
