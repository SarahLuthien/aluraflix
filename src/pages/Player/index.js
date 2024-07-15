import styles from './Player.module.css'
import { useParams } from 'react-router-dom'
import PaginaNaoEncontrada from 'pages/PaginaNaoEncontrada';
import { useEffect, useState } from 'react';


function Player() {

    const [video, setVideo] = useState();
    const parametros = useParams();
    
    useEffect(() => {
        fetch(`https://json-server-vercel-git-main-sara-roberta-pires-s-projects.vercel.app/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(...dados)
            })
    }, [parametros])


    if (!video) {
        return (<PaginaNaoEncontrada />)
    }
    return (
        
        <section className={styles.container}>
            <h1 className={styles.titulo}>{video.titulo}</h1>
            <p className={styles.descricao}>{video.descricao}</p>
            <div className={styles.containerVideo} >
                <iframe className={styles.video}
                    width="1236" 
                    height="695" 
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
            </div>
        </section>
    )
}

export default Player;