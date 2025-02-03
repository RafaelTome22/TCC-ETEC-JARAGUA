import React, { useState } from 'react';
import styles from '../styles/userSettings.module.css'; // Importa o CSS modular

function UserSettings() {
  const [isEditing, setIsEditing] = useState(false); // Estado para controle do modo de edição
  const [userData, setUserData] = useState({
    firstName: 'João',
    secondName: 'Silva',
    CPF: '999.999.333-00',
    phone: '99999-9999',
    loremIpsum1: 'Texto 1',
    loremIpsum2: 'Texto 2'
  });

  // Função para alternar entre modo edição e visualização
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Função para mascarar o valor (exemplo de mascarar o e-mail)
  const maskEmail = (CPF) => {
    return CPF.replace(/(\d{3})\.(\d{3})\.(\d{3})(-\d{2})/, '$1.xxx.xxx$4');
  };

  // Função para verificar se o campo tem texto
  const hasText = (value) => {
    return value.trim().length > 0;
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.profileHeader}>
          <div className={styles.profileIcon}></div>
          <button className={styles.editButton} onClick={toggleEdit}>
            {isEditing ? '✔️ Salvar' : '✏️ Editar perfil'}
          </button>
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              value={userData.firstName}
              readOnly={!isEditing}
              onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
              className={hasText(userData.firstName) ? styles.filled : ''}
            />
            <label>Primeiro Nome</label>
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              value={userData.secondName}
              readOnly={!isEditing}
              onChange={(e) => setUserData({ ...userData, secondName: e.target.value })}
              className={hasText(userData.secondName) ? styles.filled : ''}
            />
            <label>Segundo Nome</label>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="email"
            value={isEditing ? userData.CPF : maskEmail(userData.CPF)}
            readOnly={!isEditing}
            onChange={(e) => setUserData({ ...userData, CPF: e.target.value })}
            className={hasText(userData.CPF) ? styles.filled : ''}
          />
          <label>CPF</label>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            value={userData.phone}
            readOnly={!isEditing}
            onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
            className={hasText(userData.phone) ? styles.filled : ''}
          />
          <label>Telefone</label>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              value={userData.loremIpsum1}
              readOnly={!isEditing}
              onChange={(e) => setUserData({ ...userData, loremIpsum1: e.target.value })}
              className={hasText(userData.loremIpsum1) ? styles.filled : ''}
            />
            <label>Lorem Ipsum</label>
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              value={userData.loremIpsum2}
              readOnly={!isEditing}
              onChange={(e) => setUserData({ ...userData, loremIpsum2: e.target.value })}
              className={hasText(userData.loremIpsum2) ? styles.filled : ''}
            />
            <label>Lorem Ipsum</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
