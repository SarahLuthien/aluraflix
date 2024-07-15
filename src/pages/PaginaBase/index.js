import Cabecalho from "components/Cabecalho";
import { VideosProvider } from "components/Context/ContextVideo";
import Rodape from "components/Rodape";
import { Outlet } from "react-router-dom";


function PaginaBase() {
  return (
    <>
      <main>
        <Cabecalho />
        <VideosProvider>
        <Outlet />
        </VideosProvider>
        <Rodape />
      </main>
    </>
  );
}

export default PaginaBase;
