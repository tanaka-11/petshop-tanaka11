import Container from "@/components/ui/Container";
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

        <Container>
          <form action="" method="post" autoComplete="off">
            <div>
              <label htmlFor="nome">Nome: </label>
              <input type="text" name="nome" id="nome" required />
            </div>

            <div>
              <label htmlFor="email">E-mail: </label>
              <input type="text" name="email" id="email" required />
            </div>

            <div>
              <label htmlFor="mensagem">Mensagem: </label>
              <textarea
                maxLength={500}
                minLength={100}
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="8"
                required
              ></textarea>
            </div>

            <div>
              <button type="submit">Enviar Mensagem!</button>
            </div>
          </form>
        </Container>
      </StyledContato>
    </>
  );
}
