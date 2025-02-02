import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { AccessibleColorPicker } from 'focos'; // Importe o componente da biblioteca Focos
import styles from '../styles/TesteComponentes.module.css';

function Live() {
  const initialCode = `
import React, { useState } from 'react';
import { AccessibleColorPicker } from 'focos';

const ColorSelector = () => {
  const [color, setColor] = useState('#000000');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Cor selecionada: \${color}\`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Selecione uma Cor</h1>
      <AccessibleColorPicker
        id="color"
        label="Escolha uma cor"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        ariaDescribedBy="colorHelp"
      />
      <small id="colorHelp" style={{ display: 'block', marginTop: '5px' }}>
        Clique no seletor para escolher uma cor.
      </small>
      <button type="submit" style={{ marginTop: '20px', padding: '10px 20px' }}>
        Submeter
      </button>
    </form>
  );
};

export default ColorSelector;
  `;

  return (
    <div className={styles['teste-componente-root']}>
      <LiveProvider code={initialCode} scope={{ AccessibleColorPicker }}>
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
