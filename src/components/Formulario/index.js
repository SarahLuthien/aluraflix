import CampoTextoForm from "components/CampoTextoForm";
import styles from "./Formulario.module.css";
import ListaSuspensa from "components/ListaSuspensa";
import { BotaoFormulario } from "components/Botao";
import { useState } from "react";
import fetch from 'cross-fetch'

function Formulario({ aoCadastrar, categorias }) {
 
  const [form, setForm] = useState({
    id: '',
    titulo: '',
    capa: '',
    descricao: '',
    link: '', 
    categoria: '',
  })

  const limparFormulario = () => {
    setForm({
      id:'',
      titulo: '',
      capa: '',
      descricao: '',
      link: '',
      categoria: '',
    })
}

  const aoSalvar = async (evento) => {
    evento.preventDefault()
    try {
      await fetch("https://json-server-vercel-git-main-sara-roberta-pires-s-projects.vercel.app/videos", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
      })

    
        alert('Vídeo cadastrado com sucesso!')
        limparFormulario()
        aoCadastrar(form)

} catch (error) {
    console.error('Erro na requisição:', error)
    alert('Erro na submissão do cadastro!')
}

}
  
  return (
    <section className={styles.formulario}>
      <form onSubmit={aoSalvar} onReset={limparFormulario}>
        <div className={styles.boxtexto}>
        <h3 className={styles.titulo}>Criar Card</h3>
        </div>
        <div className={styles.campo}>
          <CampoTextoForm
            label="Titulo"
            placeholder="Insira aqui o título"
            valor={form.titulo}
            aoAlterado={(valor) => setForm((setForm) => ({...setForm, titulo: valor }))}
            tipo="text"
            minLength="3"
            maxLength=""
            obrigatorio={true}
          />
          <ListaSuspensa
            label="Categoria"
            itens={categorias}
            valor={form.categoria}
            aoAlterado={(valor) => setForm((setForm) => ({...setForm, categoria: valor }))}
            obrigatorio={true}
          />
          <CampoTextoForm
            label="Imagem"
            placeholder="Insira aqui a url da imagem"
            valor={form.capa}
            aoAlterado={(valor) => setForm((setForm) => ({...setForm, capa: valor }))}
            tipo="url"
            obrigatorio={true}
          />
          <CampoTextoForm
            label="Video"
            placeholder="Insira aqui a URL do vídeo"
            valor={form.link}
            tipo="url"
            aoAlterado={(valor) => setForm((setForm) => ({...setForm, link: valor }))}
            obrigatorio={true}
          />
          <CampoTextoForm
            label="Descrição"
            placeholder="Sobre o que é esse vídeo?"
            valor={form.descricao}
            aoAlterado={(valor) => setForm((setForm) => ({...setForm, descricao: valor }))}
            tipo="text"
            obrigatorio={true}
            minLength="5"
            maxLength="200"
          />
        </div>
        <div className={styles.containerBotao}>
          <BotaoFormulario type='submit'>Salvar</BotaoFormulario>
          <BotaoFormulario type='reset' >Limpar</BotaoFormulario>
        </div>
      </form>
    </section>
  );
}

export default Formulario;
