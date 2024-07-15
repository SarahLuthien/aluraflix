import styles from "./ModalPlayer.module.css"
import { MdOutlineCancel } from "react-icons/md"

function ModalPlayer({ video, aoFecharModal }) {

    return (
        <>
            {video && <>
                <div className={styles.overley} />
                <div open={!!video} className= {styles.modal}>
                    
                    <form method="dialog" >
                        <div >
                            <iframe className={styles.video}
                                width="auto"
                                height="auto"
                                src={video.link}
                                title={video.titulo}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen="" ></iframe>
                        <MdOutlineCancel onClick={aoFecharModal} className={styles.iconeFechar} />
                        </div>
                    </form>
                
                </div>
            </>}
        </>
    )
}

export default ModalPlayer;