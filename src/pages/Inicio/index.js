import Banner from "components/Banner"
import Categorias from "components/Categorias";
import categorias  from "json/categorias.json"
import ModalEdit from "components/ModalEdit";
import { useEffect, useState } from "react";
import ModalPlayer from "components/ModalPlayer";


function Inicio (){

    const [videos, setVideos] = useState([])
    
    useEffect(() => {
        
        fetch("https://json-server-vercel-git-main-sara-roberta-pires-s-projects.vercel.app/videos")
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
            .catch(err => console.error(err));
            
            }, [])
   

    
    const [videoSelecionado, setVideoSelecionado] = useState(null)
    const [videoVer, setVideoVer] = useState(null)


    const editVideo = (video) => {
        setVideoSelecionado(video)
    }

    function deleteVideo(id) {
        setVideos(videos.filter(video => video.id !== id))
    }


    const verVideo = (video) => {
        setVideoVer(video)
    }
    
    const atualizarVideo = (videoAtualizado) => {
        setVideos(videos.map(video => {
            if (video.id === videoAtualizado.id) {
                return videoAtualizado
            }
            return video
        }))
        setVideoSelecionado(null)
    }

    const fecharModal = () => {
        setVideoSelecionado(null)
        setVideoVer(null)
    }
  
  
    return(
        <>
            <Banner 
             categoria={categorias}
             aoVisualizarVideo={verVideo} 
             />
             <section>
            {categorias.map((categoria) => 
            <Categorias 
            categoria={categoria}
            key={categoria.id} 
            aoDeletar={deleteVideo}
            aoEditar={editVideo}
            aoVisualizarVideo={verVideo}
            videos={videos.filter(video => video.categoria === categoria.nome)}
            />
            )}  
            </section>
            <ModalEdit
                video={videoSelecionado}
                aoSalvar={atualizarVideo}
                aoFecharModal={fecharModal}
                categorias={categorias.map((categoria) => categoria.nome)} 
            />
            <ModalPlayer
                video={videoVer}
                aoFecharModal={fecharModal} 
            />           
        </>
    )
}

export default Inicio;

