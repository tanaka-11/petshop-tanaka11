import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

// CSS
const StyledHeader = styled.header`
  background-color: #f7f7f7;
  box-shadow: var(--sombra-box);

  h1 a {
    text-decoration: none;
    color: var(--cor-primaria);
    background-color: var(--cor-primaria-fundo);
    padding: 0.5rem;
    border-radius: var(--borda-arredondada);
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function Cabecalho() {
  return (
    <StyledHeader>
      <div className="limitador">
        <h1>
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={48}
              height={48}
              alt="Logo do Petshop"
            />
            PetShop
          </Link>
        </h1>

        <Menu />
      </div>
    </StyledHeader>
  );
}
