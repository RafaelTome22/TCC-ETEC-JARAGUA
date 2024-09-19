import React, { useState } from 'react';
import styles from '../styles/RecuperaSenha.module.css';


function RecuperaSenha() {
  const [titulo, setTitulo] = useState("Redefinir Senha");
  const [subtitulo, setSubtitulo] = useState("Digite o endereço de e-mail que você utiliza para enviarmos um link de redefinição de senha.");
  const [inputValue, setInputValue] = useState("");
  const [rotulo, setRotulo] = useState("Endereço de e-mail");
  const [placeholder, setPlaceholder] = useState("Digite seu e-mail");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const emailRegex = /^(?:[\w\.\-]+)@(?:gmail\.com|hotmail\.com)$/i;
    if (emailRegex.test(inputValue)) {
      setTitulo("Verifique sua caixa de entrada");
      setSubtitulo("Enviamos um e-mail com código de redefinição de senha. Digite-o no campo abaixo.");
      setRotulo("Código de verificação");
      setInputValue(""); // Limpa o campo de entrada
      setPlaceholder("Código"); // Muda o placeholder
    } else {
      alert("Por favor, insira um e-mail válido (@gmail.com ou @hotmail.com).");
    }
  };

  const handleCancel = () => {
    setTitulo("Redefinir Senha");
    setSubtitulo("Digite o endereço de e-mail que você utiliza para enviarmos um link de redefinição de senha.");
    setRotulo("Endereço de e-mail");
    setInputValue(""); // Limpa o campo de entrada
    setPlaceholder("Digite seu e-mail"); // Restaura o placeholder
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>{titulo}</h1>
      <p className={styles.subtitulo}>{subtitulo}</p>
      <div className={styles.retangulo}>
        <p className={styles.label}>{rotulo}</p>
        <input
          className={styles.pesquisa}
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
        <div className={styles.botoes}>
          <button className={styles.envia} onClick={handleSubmit}>Enviar</button>
          <button className={styles.cancela} onClick={handleCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}


export default RecuperaSenha;