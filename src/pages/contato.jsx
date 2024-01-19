import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";

// CSS
const StyledContato = styled.section`
  h2::before {
    content: "💌 ";
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 0.3rem;
    padding: 0.8rem;
    font-weight: bold;
    font-size: 20px;

    & input,
    & textarea {
      padding: 0.8rem;
      border: none;
      margin: 0.2rem;
      box-shadow: var(--sombra-box);
      border-radius: 6px;
    }

    & button {
      background-color: var(--cor-primaria-fundo);
      color: var(--cor-primaria);
      padding: 0.8rem;
      border-radius: var(--borda-arredondada);
      font-size: 20px;
      cursor: pointer;

      &:hover,
      &:focus {
        background-color: var(--cor-primaria-fundo-hover);
      }
    }
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
              <label htmlFor="nome">Nome </label>
              <input type="text" name="nome" id="nome" required />
            </div>

            <div>
              <label htmlFor="email">E-mail </label>
              <input type="email" name="email" id="email" required />
            </div>

            <div>
              <label htmlFor="mensagem">Mensagem </label>
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
