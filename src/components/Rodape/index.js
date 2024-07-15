import logo from "./Logo.svg"; 
import styles from "./Rodape.module.css"

function Rodape (){
    return(
        <footer className={styles.rodape}>
            <img src={logo} alt="logo do Aluraflix"/>
            <h4>Desenvolvido por Sara Pires</h4>
        </footer>
    )
}

export default Rodape;