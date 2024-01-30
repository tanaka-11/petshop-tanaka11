import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import serverApi from "./api/server";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

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

    & input,
    & textarea {
      padding: 0.8rem;
      border: none;
      margin: 0.2rem;
      box-shadow: var(--sombra-box);
      border-radius: 6px;
    }

    & button {
      background-color: var(--cor-secundaria-fundo);
      color: #f7f7f7;
      padding: 0.8rem;
      border-radius: var(--borda-arredondada);
      cursor: pointer;
      border: none;

      &:hover,
      &:focus {
        background-color: var(--cor-secundaria-fundo-hover);
      }
    }
  }
`;

export default function Contato() {
  // Hook useForm
  const { register, handleSubmit } = useForm();
  let router = useRouter();

  const enviarContato = async (dados) => {
    const { nome, email, mensagem } = dados;

    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    try {
      await fetch(`${serverApi}/contatos.json`, opcoes);
      alert("Dados Enviados 🐾");
      router.push("/");
    } catch (error) {
      console.error("Erro ao enviar: " + error.message);
    }
  };

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
          <form
            action=""
            method="post"
            autoComplete="off"
            // Passando programação do useForm
            onSubmit={handleSubmit((dados) => {
              enviarContato(dados);
            })}
          >
            <div>
              <label htmlFor="nome">Nome </label>
              <input
                type="text"
                name="nome"
                id="nome"
                required
                {...register("nome")}
              />
            </div>

            <div>
              <label htmlFor="email">E-mail </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                {...register("email")}
              />
            </div>

            <div>
              <label htmlFor="mensagem">Mensagem </label>
              <textarea
                maxLength={500}
                minLength={50}
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="8"
                required
                {...register("mensagem")}
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
