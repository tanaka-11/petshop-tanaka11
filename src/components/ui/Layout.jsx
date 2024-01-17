import Cabecalho from "./Cabecalho";
import Menu from "./Menu";

export default function Layout({ children }) {
  return (
    <>
      <Cabecalho>
        <Menu />
      </Cabecalho>

      <main className="limitador">{children}</main>
    </>
  );
}
