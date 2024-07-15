import styles from './ModalEdit.module.css'
import CampoTextoForm from 'components/CampoTextoForm'
import { useEffect, useState } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BotaoFormulario } from 'components/Botao'
import ListaSuspensa from 'components/ListaSuspensa'

function ModalEdit({ video, aoSalvar, aoFecharModal, categorias }) {

    const [id, setId] = useState('')
    const [titulo, setTitulo] = useState('')
    const [capa, setCapa] = useState('')
    const [descricao, setDescricao] = useState('')
    const [link, setLink] = useState('')
    const [categoria, setCategoria] = useState('')
    

    useEffect(() => {
        if (video) {
            setId(video.id)
            setTitulo(video.titulo)
            setCapa(video.capa)
            setDescricao(video.descricao)
            setLink(video.link)
            setCategoria(video.categoria)
            
        } else {
            setId('');
            setTitulo('');
            setCapa('');
            setDescricao('');
            setLink('');
            setCategoria('');
            
        }
    }, [video])

    const submit = (event) => {
        event.preventDefault();
        const videoAtualizado = {
            id: video.id,
            titulo,
            descricao,
            link,
            capa,
            categoria
        }
        aoSalvar(videoAtualizado)
        aoFecharModal()
    }

    return (
        <>
            {video && <>
                <div className={styles.overley} />
                <dialog open={!!video} className={styles.modal}>
                    <IoMdCloseCircleOutline  onClick={aoFecharModal} className={styles.iconeFechar} />
                    <h1>Editar Card</h1>
                    <form onSubmit={submit} method="dialog">
                        <div className={styles.container}>
                                <CampoTextoForm 
                                    obrigatorio={true}
                                    label="Título"
                                    placeholder="Insira aqui o título"
                                    valor={titulo}
                                    aoAlterado={valor => setTitulo(valor)}
                                />

                                <ListaSuspensa
                                    obrigatorio={true}
                                    label="Categoria"
                                    placeholder="Selecione uma categoria..."
                                    itens={categorias}
                                    valor={categoria}
                                    aoAlterado={valor => setCategoria(valor)}
                                />

                                <CampoTextoForm
                                    obrigatorio={true}
                                    label="Imagem"
                                    placeholder="URL da imagem"
                                    valor={capa}
                                    aoAlterado={valor => setCapa(valor)}
                                />

                                <CampoTextoForm
                                    obrigatorio={true}
                                    label="Vídeo"
                                    placeholder="URL do vídeo"
                                    valor={link}
                                    aoAlterado={valor => setLink(valor)}
                                />

                                <CampoTextoForm
                                    obrigatorio={true}
                                    label="Descrição"
                                    placeholder="Sobre o que é esse vídeo?"
                                    valor={descricao}
                                    aoAlterado={valor => setDescricao(valor)}
                                />

                            </div>
                            <div className={styles.botoes}>
                                <BotaoFormulario
                                    children="Salvar"
                                    type='submit'
                                />
                                <BotaoFormulario
                                    children="Limpar"
                                    type='reset'
                                />
                        </div>
                    </form>
                </dialog>
            </>}
        </>
    )
}


export default ModalEdit