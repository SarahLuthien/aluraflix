import { Link } from "react-router-dom";
import logo from "./Logo.svg"; 
import styles from "./Cabecalho.module.css";
import Botao from "components/Botao";

function Cabecalho() {
    return(
        <header className={styles.cabecalho}>
            <Link to="/">
            <img  src={logo} alt="logo do Aluraflix"/>
            </Link>
            <nav>
            <Botao condition="true" url="/">
          Home
        </Botao>
        <Botao condition="true" url="/NovoVideo">
          Novo Video
        </Botao>
            </nav>
        </header>
    )
}

export default Cabecalho;