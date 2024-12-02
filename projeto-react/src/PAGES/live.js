import React, { useState } from 'react';
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
`;

    const [shouldRender, setShouldRender] = useState(false);

    const handleRenderClick = () => {
        setShouldRender(true);
    };

    return (
        <div className={styles['teste-componente-root']}>
            <div className={styles['editor-container']}>
                <h1 className={styles['header']}>Console</h1>
                <LiveProvider code={initialCode} scope={{ AccessibleButton }}>
                    <LiveEditor className={styles['code-block']} value={initialCode} readOnly />
                    <LiveError className={styles['error-text']} />
                </LiveProvider>
                <button 
                    className={`${styles['btn']} ${styles['btn-render']}`} 
                    onClick={handleRenderClick}
                >
                    Renderizar Componente
                </button>
            </div>

            <div className={styles['preview-container']}>
                <h1 className={styles['header']}>Componente Renderizado</h1>
                {shouldRender && (
                    <LiveProvider code={initialCode} scope={{ AccessibleButton }}>
                        <LivePreview className={styles['live-preview']} />
                    </LiveProvider>
                )}
            </div>
        </div>
    );
}

export default Live;
