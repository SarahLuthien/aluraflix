import styles from "./PaginaNaoEncontrada.module.css"

function PaginaNaoEncontrada (){
    return(
        <section className={styles.container}>
        <h1>O vídeo que você procura não está disponível.</h1>
        </section>
    )
}

export default PaginaNaoEncontrada;