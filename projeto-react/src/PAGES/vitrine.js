import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/vitrine.module.css';
import logo from '../assets/logo.png';
import lupa from '../assets/lupa.png';
import copy from '../assets/documento.png';

function Vitrine() {
  const navigate = useNavigate();
  const delay = 500; // Delay de 500 milissegundos (0.5 segundos)

  const handleLogin = () => {
    setTimeout(() => {
      navigate('/login');
    }, delay);
  };

  const codeRef = useRef(null); // Cria uma referência para o código

  function copyCode() {
    const codeElement = codeRef.current; // Acessa o elemento <pre> através da ref

    // Cria um elemento de input temporário para usar como intermediário
    const tempInput = document.createElement('textarea');
    tempInput.value = codeElement.textContent;
    document.body.appendChild(tempInput);

    // Seleciona o conteúdo do input e copia para a área de transferência
    tempInput.select();
    document.execCommand('copy');

    // Remove o input temporário
    document.body.removeChild(tempInput);

    // Feedback visual ou de áudio para indicar que o código foi copiado
    alert('Código copiado para a área de transferência!');
  }

  return (
    <div className={styles.all}> {/* Começo da página vitrine */}
      <header className={styles['header-main']}> {/* Começo do header */}
        <div className={styles['header-info']}> {/* Começo do header de info */}
          <img className={styles.logo} src={logo} alt="logo da empresa focos" />
          <p className={styles['nome-empresa']}>Focos</p>
        </div> {/* Fim do header de info */}
        <div className={styles['header-pesquisa']}>
          <input type="text" id="searchInput" placeholder="Pesquisar" className={styles['searchInput']} />
          <label htmlFor="searchInput">
            <span>
              <img className={styles['icon-pesquisa']} src={lupa} alt="ícone de pesquisa" />
            </span>
          </label>
        </div>
        <div className={styles['header-btn']}> {/* Começo do header botões de login e cadastro */}
          <button title="Cadastre-se" className={styles['btn-form-log']}>Cadastre-se</button>
          <button title="Login" className={styles['btn-form-log']} onClick={handleLogin}>Login</button>
        </div> {/* Fim do header botões de login e cadastro */}
      </header> {/* Fim do header */}

      <article className={styles['article-body']}>
        <div className={styles['article-main']}>
          <div className={styles['exemp-cod']}>
            <div className={styles['text-exemp-cod']}>
              <h1>Primeiros passos</h1>
              <div className={styles['code-container']}>
                <pre ref={codeRef} id="code">
                  {`npm install focos`}
                </pre>
                <button className={styles["btn-copy"]} onClick={copyCode}>
                  <img
                    className={styles['icon-copy']} src={copy} alt="ícone de cópia"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className={styles['text-exemp']}>
            <div className={styles['explicacao-exemp-cod']}>
              <h1>Sobre</h1>
            </div>
          </div>
        </div>
        <div className="article-secundario">
          {/* Conteúdo adicional pode ser adicionado aqui */}
        </div>
      </article>
    </div>
  );
}

export default Vitrine;

