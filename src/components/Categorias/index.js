import Card from "components/Card";
import styles from "./Categoria.module.css";



function Categorias({
  videos,
  aoCadastrar,
  aoDeletar,
  categoria,
  aoVisualizarVideo,
  aoEditar
}) {

  return (
      (videos.length > 0) && <section className={styles.categorias}>
        <h3 style={{ backgroundColor: categoria.cor }}>{categoria.nome}</h3>
        <div className={styles.cardContainer} >
          {videos?.map((video) =>  {
           return <Card
              style={{ borderColor: categoria.cor }}
              video={video}
              key={video.id}
              categoria={categoria}
              aoDeletar={aoDeletar}
              aoEditar={aoEditar}
              aoVisualizarVideo={aoVisualizarVideo}
              aoCadastrar={aoCadastrar}
            />
            })}
        </div>
      </section>
  )
}

export default Categorias;
