import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'; 
import { AccessibleButton } from 'focos'; 
import styles from '../styles/TesteComponentes.module.css';

function Live() {
    const initialCode = `
function AcesssibleButton() {
  const handleClick = () => alert('Você clicou em mim!');
  
  return (
    <AccessibleButton label="Clique em mim" onClick={handleClick} />
  );
}
  /* Esta é apenas uma função de teste, não representa o componente real */ 
`;

    return (
      <div className={styles['teste-componente-root']}>
        <LiveProvider code={initialCode} scope={{ AccessibleButton }}>
          <LiveEditor 
            className={styles['code-block']} 
            value={initialCode} 
            readOnly 
          />
          <LiveError className={styles['error-text']} />

          <div className={styles['preview-container']}>
            <LivePreview />
          </div>
        </LiveProvider>
      </div>
    );
}

export default Live;
