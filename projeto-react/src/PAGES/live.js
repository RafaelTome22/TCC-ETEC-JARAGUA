import React, { useState } from 'react';
import { AccessibleButton } from 'focos'; 
import styles from '../styles/TesteComponentes.module.css';

function Live() {
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
      setIsClicked(true);
      alert('Você clicou no botão acessível!');
    };
  
    return (
      <div className={styles['teste-componente-root']}> {/* Envolvendo em uma div raiz */}
        <h1>Sandbox: Teste do AccessibleButton</h1>
        
        {/* Exemplo de código */}
        <pre className={styles['code-block']}>
          {`
  import React from 'react';
  import AccessibleButton from 'focos';
  
  function TestComponent() {
    const handleClick = () => alert('Você clicou em mim!');
    
    return (
      <AccessibleButton label="Clique em mim" onClick={handleClick} />
    );
  }
  
  export default TestComponent;
          `}
        </pre>
  
        {/* Botão para Teste */}
        <div className={styles['button-container']}>
          <AccessibleButton label="Teste o AccessibleButton" onClick={handleButtonClick} />
        </div>
  
        {isClicked && <p className={styles['feedback-text']}>O botão foi clicado!</p>}
      </div>
    );
}

export default Live;
