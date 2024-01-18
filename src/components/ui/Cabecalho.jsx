import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";

export default function Cabecalho() {
  return (
    <header>
      <h1>
        <Image
          src="/images/logo.png"
          width={48}
          height={48}
          alt="Logo do Petshop"
        />
        <Link href="/">PetShop</Link>
      </h1>

      <Menu />
    </header>
  );
}
