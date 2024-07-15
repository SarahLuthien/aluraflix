import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import deletar from "./deletar.png";
import editar from "./editar.png";

function Card({ video, categoria, aoDeletar, aoVisualizarVideo, aoEditar }) {
  return (
    <section className={styles.container} style={{ borderColor: categoria.cor }}>
      <div>
        <Link to={`/${video.id}`}>
        <img src={video.capa} alt={video.titulo} className={styles.capa} />
        </Link>
        <div onClick={() => aoVisualizarVideo(video)}  className={styles.imagem} style={{ color: categoria.cor }}></div>
      </div>
      <div className={styles.card} style={{ borderColor: categoria.cor }}>
        <Link to={`/${video.id}`}>
          <h4>{video.titulo}</h4>
        </Link>
        <div className={styles.box}>
          <div className={styles.icones} onClick={() => aoDeletar(video.id)}>
            <img className={styles.icon} src={deletar} alt="icone editar" />
            <p>Deletar</p>
          </div>
          <div className={styles.icones} onClick={() => aoEditar(video.id)}>
            <img className={styles.icon} src={editar} alt="icone deletar" />
            <p>Editar</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
