import styles from "./Titulo.module.css";

function Titulo () {
    return(
        <div className={styles.container}>
        <h1>Novo Vídeo</h1>
        <h2>Complete o formulário para criar um novo card de vídeo</h2>
        </div>
    ) 
}

export default Titulo;