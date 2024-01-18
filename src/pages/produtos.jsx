import Head from "next/head";
import styled from "styled-components";

// CSS
const StyledProdutos = styled.section`
  h2::before {
    content: "🎁 ";
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
      </StyledProdutos>
    </>
  );
}
