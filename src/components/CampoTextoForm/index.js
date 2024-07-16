import styles from "./CampoTextoForm.module.css";

function CampoTextoForm({
  tipo,
  minlength,
  maxlength,
  placeholder,
  label,
  valor,
  obrigatorio = false,
  aoAlterado,
}) {
  const placeholderModified = `${placeholder}...`;

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input
        type={tipo}
        value={valor}
        minLength={minlength}
        maxLength={maxlength}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModified}
      />
    </div>
  );
}

export default CampoTextoForm;

export const TextArea = ({
  tipo,
  minlength,
  maxlength,
  placeholder,
  label,
  valor,
  obrigatorio = false,
  aoAlterado,
}) => {
  const placeholderModified = `${placeholder}...`;

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <textarea
        type={tipo}
        value={valor}
        minLength={minlength}
        maxLength={maxlength}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModified}
      />
    </div>
  );
};
