import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

// CSS
const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    background-color: var(--cor-primaria-fundo);
    color: var(--cor-primaria);
    padding: 0.8rem 1rem;

    &:first-child {
      border-top-left-radius: var(--borda-arredondada);
      border-bottom-left-radius: var(--borda-arredondada);
    }

    &:last-child {
      border-top-right-radius: var(--borda-arredondada);
      border-bottom-right-radius: var(--borda-arredondada);
    }

    &:hover,
    &:focus {
      background-color: var(--cor-primaria-fundo-hover);
    }

    &.ativo {
      background-color: lightslategray;
    }

    @media screen and (min-width: 700px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;

export default function Menu() {
  const linkAtivo = usePathname();

  return (
    <StyledNav>
      <Link href="/" className={linkAtivo == "/" ? "ativo" : ""}>
        Blog
      </Link>
      <Link
        href="/produtos"
        className={linkAtivo == "/produtos" ? "ativo" : ""}
      >
        Produtos
      </Link>
      <Link href="/sobre" className={linkAtivo == "/sobre" ? "ativo" : ""}>
        Sobre
      </Link>
      <Link href="/contato" className={linkAtivo == "/contato" ? "ativo" : ""}>
        Contato
      </Link>
    </StyledNav>
  );
}
