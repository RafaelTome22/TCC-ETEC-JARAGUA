import React, { useState } from 'react';
import styles from '../styles/RecuperaSenha.module.css';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../BD/firebase.js';

function RecuperaSenha() {
  const [titulo, setTitulo] = useState("Redefinir Senha");
  const [subtitulo, setSubtitulo] = useState("Digite o endereço de e-mail que você utiliza para enviarmos um link de redefinição de senha.");
  const [email, setEmail] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState(""); 

  const handleChange = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      console.log("Por favor, insira um endereço de e-mail.");
      return; 
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMensagemSucesso("Um código de redefinição de senha foi enviado para o seu e-mail.");
      setEmail(""); 
    } catch (error) {
      console.log(error);
      setMensagemSucesso("Ocorreu um erro ao enviar o e-mail. Tente novamente.");
    }
  }

  const handleCancel = () => {
    setTitulo("Redefinir Senha");
    setSubtitulo("Digite o endereço de e-mail que você utiliza para enviarmos um link de redefinição de senha.");
    setEmail("");
    setMensagemSucesso(""); 
  };

  return (
    <div className={styles.container}>
      {mensagemSucesso ? (
        <h1 className={styles.mensagemSucesso}>{mensagemSucesso}</h1> 
      ) : (
        <>
          <h1 className={styles.titulo}>{titulo}</h1>
          <p className={styles.subtitulo}>{subtitulo}</p>
          <div className={styles.retangulo}>
            <p className={styles.label}>Endereço de e-mail</p>
            <input
              className={styles.pesquisa}
              type='text'
              value={email} 
              onChange={handleChange}
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
