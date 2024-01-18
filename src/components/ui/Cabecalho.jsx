import Link from "next/link";
import Menu from "./Menu";

export default function Cabecalho() {
  return (
    <header>
      <h1>
        <Link href="/">PetShop</Link>
      </h1>

      <Menu />
    </header>
  );
}
