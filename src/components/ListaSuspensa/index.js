import styles from "./ListaSuspensa.module.css"

function ListaSuspensa ({label, aoAlterado, valor, obrigatorio = false, itens, placeholder }){
    return(
        <div className={styles.container}>
        <label>{label}</label>
            <select 
            placeholder={placeholder}
            onChange={evento => aoAlterado(evento.target.value)} 
            required={obrigatorio} 
            value={valor}>
                 <option className={styles.opcoes} value="">Selecione uma categoria</option> 
                {itens.map(item => {
                    return <option key={item} >{item}</option>
                })}
            </select>
    </div>
    )
}


export default ListaSuspensa;