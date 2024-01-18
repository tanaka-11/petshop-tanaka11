import Head from "next/head";
import styled from "styled-components";

// CSS
const StyledContato = styled.section`
  h2::before {
    content: "💌 ";
  }
`;

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato - PetShop</title>
        <meta
          name="description"
          content="Nossos contatos para qualquer duvida!"
        />
        <meta name="keywords" content="pets, petshop, cachorro, gato" />
      </Head>

      <StyledContato>
        <h2>Fale Conosco!</h2>
      </StyledContato>
    </>
  );
}
