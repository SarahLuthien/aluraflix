import styles from './Banner.module.css'
import video from 'json/destaque.json'
import { useEffect, useState } from 'react'
import { FcNext } from "react-icons/fc"
import { FcPrevious } from "react-icons/fc"
import { Link } from 'react-router-dom'


function Banner() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const sortVideos = video.sort(() => Math.random() - 2)

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sortVideos.length);
        }, 5000)

        return () => clearInterval(interval)
    }, [sortVideos])

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % video.length);
    }

    const prevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + video.length) % video.length);
    }

    const currentItem = video[currentIndex];

    return (
        <section className={styles.container} style={{ color: currentItem.cor }}>
            <div
                className={styles.capa}
                style={{
                    backgroundImage: `linear-gradient(to bottom,
                        rgba(0, 0, 0, 0.56),
                        rgba(0, 0, 0, 0.56)),
                      url('${currentItem.capa}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%',
                    width: '100%',
                    maxHeight: 'auto',
                }}
            >
                <div className={styles.icons}>
                    <FcPrevious onClick={prevItem} className={styles.icone} />
                    <FcNext onClick={nextItem} className={styles.icone} />
                </div>

                <div className={styles.item}>
                    <div className={styles.containertitulo} style={{ backgroundColor: currentItem.cor }}>
                        <h1>{currentItem.categoria}</h1>
                    </div>
                        <h2>{currentItem.titulo}</h2>
                        <p>{currentItem.descricao}</p>
                    <div className={styles.miniBanner} style={{ color: currentItem.cor }}>
                        <Link to={`/${currentItem.id}`} style={{ color: currentItem.cor }} >
                        <img className={styles.imagem} alt={currentItem.titulo} src={currentItem.capa} ></img>
                        </Link>
                </div>
            </div>
        </div>
        </section >
    )
}

export default Banner