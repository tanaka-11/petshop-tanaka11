import Container from "@/components/ui/Container";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

// CSS
const Styled404 = styled.section`
  text-align: center;
  img {
    max-width: 100%;
  }
  h2::before {
    content: "🙀 ";
  }
`;

export default function Pagina404() {
  return (
    <>
      <Head>
        <title>Ops - Petshop</title>
      </Head>

      <Styled404>
        <h2>Au Au Au! Foi mal</h2>

        <Container>
          <h3>Algo deu errado</h3>
          <Image
            src="/images/404.svg"
            width={500}
            height={269}
            alt="Ilustração de um cachorrinho"
          />
        </Container>
      </Styled404>
    </>
  );
}
