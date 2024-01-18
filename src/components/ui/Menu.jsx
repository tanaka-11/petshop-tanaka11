import Link from "next/link";
import styled from "styled-components";

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
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }

    &:last-child {
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
  }
`;

export default function Menu() {
  return (
    <StyledNav>
      <Link href="/">Blog</Link>
      <Link href="/produtos">Produtos</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/contato">Contato</Link>
    </StyledNav>
  );
}
