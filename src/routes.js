import Inicio from "pages/Inicio";
import NovoVideo from "pages/NovoVideo";
import PaginaBase from "pages/PaginaBase";
import PaginaNaoEncontrada from "pages/PaginaNaoEncontrada";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<PaginaBase />}>
                <Route index element={<Inicio />}></Route>
                <Route path="/NovoVideo" element={<NovoVideo/>}></Route>
                <Route path=":id" element={<Player/>}></Route>
                <Route path="*" element={<PaginaNaoEncontrada />}></Route>
            </Route>
        </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes;