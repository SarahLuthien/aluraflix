import styles from "./NovoVideo.module.css";
import Formulario from "components/Formulario";
import Titulo from "components/Titulo";
import categorias from "json/categorias.json";
import { useEffect, useState } from "react";

function NovoVideo() {

  const [videos, setVideos] = useState([])
    
  useEffect(() => {
      
      fetch("https://json-server-vercel-git-main-sara-roberta-pires-s-projects.vercel.app/videos")
      .then(resposta => resposta.json())
          .then(dados => setVideos(dados))
          .catch(err => console.error(err));
          
          }, []) 

  const adicionarNovoVideo = (novoVideo) => {
    setVideos((prevVideos) => [...prevVideos, novoVideo]);
  };

  return (
    <>
      <section className={styles.container}>
        <Titulo />
      </section>
      <Formulario
        categorias={categorias.map((categoria) => categoria.nome)}
        className={styles.sessaoFormulario}
        aoCadastrar={adicionarNovoVideo}
      />
    </>
  );
}

export default NovoVideo;
