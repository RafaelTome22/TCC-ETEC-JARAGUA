import React, { useState } from 'react';
import styles from '../styles/RecuperaSenha.module.css';

function RecuperaSenha() {
  const [titulo, setTitulo] = useState("Redefinir Senha");
  const [subtitulo, setSubtitulo] = useState("Digite o endereço de e-mail que você utiliza para enviarmos um link de redefinição de senha.");
  const [inputValue, setInputValue] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState(""); // Estado para a mensagem de sucesso

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const emailRegex = /^(?:[\w\.\-]+)@(?:gmail\.com|hotmail\.com)$/i;
    if (emailRegex.test(inputValue)) {
      // Aqui você deve adicionar a chamada para a sua API que envia o e-mail
      setMensagemSucesso("Um código de redefinição de senha foi enviado para o seu e-mail.");
      setInputValue(""); // Limpa o campo de entrada
    } else {
      alert("Por favor, insira um e-mail válido (@gmail.com ou @hotmail.com).");
    }
  };

  const handleCancel = () => {
    setTitulo("Redefinir Senha");
    setSubtitulo("Digite o endereço de e-mail que você utiliza para enviarmos um link de redefinição de senha.");
    setInputValue(""); 
    setMensagemSucesso(""); // Limpa a mensagem de sucesso
  };

  return (
    <div className={styles.container}>
      {mensagemSucesso ? (
        <h1 className={styles.mensagemSucesso}>{mensagemSucesso}</h1> // Exibe a mensagem de sucesso
      ) : (
        <>
          <h1 className={styles.titulo}>{titulo}</h1>
          <p className={styles.subtitulo}>{subtitulo}</p>
          <div className={styles.retangulo}>
            <p className={styles.label}>Endereço de e-mail</p>
            <input
              className={styles.pesquisa}
              type='text'
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Digite seu e-mail"
            />
            <div className={styles.botoes}>
              <button className={styles.envia} onClick={handleSubmit}>Enviar</button>
              <button className={styles.cancela} onClick={handleCancel}>Cancelar</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default RecuperaSenha;
