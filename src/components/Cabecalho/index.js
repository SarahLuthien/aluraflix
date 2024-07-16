import { Link } from "react-router-dom";
import logo from "./Logo.svg";
import styles from "./Cabecalho.module.css";
import Botao from "components/Botao";
import home from "./home.png";

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo do Aluraflix" />
      </Link>
      <nav className={styles.container}>
        <div className={styles.containerhome}>
        <Botao  url="/">
          Home
        </Botao>
        </div>
        <Botao  url="/NovoVideo">
          Novo Video
        </Botao>
      </nav>
    </header>
  );
}

export default Cabecalho;
