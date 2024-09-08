import React, { useRef } from 'react';
import styles from '../styles/RecuperaSenha.module.css';


function RecuperaSenha() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Redefinir Senha</h1>
      <p className={styles.subtitulo}>Digite o endereço de e-mail que você utiliza para enviarmos um link de redefinição de senha.</p>
      <div className={styles.retangulo}>
        <p className={styles.label}>Endereço de e-mail</p>
        <input className={styles.pesquisa} type='text' placeholder="Digite seu e-mail"></input>
        <button className={styles.envia}>Enviar</button>
        <button className={styles.cancela}>Cancelar</button>
      </div>
    </div>
  );
}


export default RecuperaSenha;