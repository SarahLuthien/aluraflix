import { Link, useLocation } from "react-router-dom";
import styles from "./Botao.module.css";

function Botao({ url, children }) {

    const paginaAtual = useLocation();


let classButton = ''

if (paginaAtual.pathname === '/') {
    if(url === './') {
    } else { classButton = styles.botao }
} else if (paginaAtual.pathname === '/NovoVideo') {
        if(url === './NovoVideo') {
        } else { classButton = styles.botao }
    } else classButton = styles.botao

return (
    <Link to={url} className={classButton}>
        {children}
    </Link>
)
}

export default Botao;

export const BotaoFormulario = ({type, children}) => {
const classButton = type === 'submit' ? styles.botao : styles.botao;
return (
    <button className={classButton} type={type} >{children}</button> 
)
}