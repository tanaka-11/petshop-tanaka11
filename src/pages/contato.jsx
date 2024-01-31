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

  /* Seletor ">" significa dentro do "elemento descendente direto", ou seja, so pegam as div de dentro do formulario */
  form > div {
    display: flex;
    flex-direction: column;
    margin: 0.3rem;
    padding: 0.8rem;
    font-weight: bold;

    /* Seletor "+" significa "elemento adjacente", ou seja, nos paragrafos após a div. */
    & + p {
      font-size: 0.9rem;
      color: darkred;
      font-weight: bold;
      margin-left: 1.3rem;
      margin-top: 0;
    }

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
  // useForm com desestruturação dos parametros
  const {
    register, // registro dos campos
    handleSubmit, // processamento do form
    formState: { errors }, // state do form
  } = useForm();
  let router = useRouter();

  // Função de enviarContato via Firebase com redirecinamento p/ pagina inicial.
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
            // programação do useForm
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
                {...register("nome", { required: true })}
              />
            </div>

            {/* Utilizando o formState para o required do campo nome com optional chaining(evitando erro do type não estar definido) */}
            {errors.nome?.type == "required" && (
              <p>Você deve digitar um nome.</p>
            )}

            <div>
              <label htmlFor="email">E-mail </label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", { required: true })}
              />
            </div>

            {/* Utilizando o formState para o required do campo email*/}
            {errors.email?.type == "required" && (
              <p>Você deve digitar um email.</p>
            )}

            <div>
              <label htmlFor="mensagem">Mensagem </label>
              <textarea
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="8"
                maxLength={200}
                {...register("mensagem", {
                  required: true,
                  minLength: 20,
                })}
              ></textarea>
            </div>

            {/* Utilizando o formState para o required e minLength do campo mensagem*/}
            {errors.mensagem?.type == "required" && (
              <p>Você deve digitar uma mensagem.</p>
            )}
            {errors.mensagem?.type == "minLength" && (
              <p>Escreva no mínimo 20 caracteres.</p>
            )}

            <div>
              <button type="submit">Enviar Mensagem</button>
            </div>
          </form>
        </Container>
      </StyledContato>
    </>
  );
}
