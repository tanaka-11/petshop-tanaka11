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

        <h3>Missão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolore
          sapiente impedit totam ad provident. Deleniti enim eos veritatis
          aperiam, recusandae itaque cumque ratione earum ipsam quis qui numquam
          ipsa.
        </p>

        <h3>Visão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          tenetur, explicabo facilis minima modi asperiores ullam consectetur
          aperiam ad repellat itaque illum culpa.
        </p>

        <h3>Valores</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, aut?
          Aspernatur cum exercitationem, optio voluptas nihil hic vitae.
        </p>
      </StyledSobre>
    </>
  );
}
