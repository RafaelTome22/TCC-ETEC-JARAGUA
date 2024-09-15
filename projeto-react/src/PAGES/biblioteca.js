import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/biblioteca.module.css';
import logo from '../assets/logo.png';
import lupa from '../assets/lupa.png';
import copy from '../assets/documento.png';
import userIcon from '../assets/user.png'; // Ícone de usuário
import { useAuth } from '../context/authContext'; // Importa o contexto de autenticação

function Biblioteca() {
  const codeRef1 = useRef(null);
  const codeRef2 = useRef(null);

  const navigate = useNavigate();
  const { currentUser, logout } = useAuth(); // Obtém o usuário atual e a função de logout

  const [isPopupOpen, setIsPopupOpen] = useState(false); // Estado para controlar o pop-up

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen); // Alterna a exibição do pop-up
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = async () => {
    try {
      await logout(); // Executa o logout
      navigate('/'); // Redireciona para a página principal (Vitrine)
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  function copyCode(ref) {
    const codeElement = ref.current;
    const tempInput = document.createElement('textarea');
    tempInput.value = codeElement.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Código copiado para a área de transferência!');
  }

  return (
    <div className={styles['all']}>
      <header className={styles['header-main']}> {/* Header */}
        <div className={styles['header-info']}> {/* Logo e nome da empresa */}
          <img className={styles.logo} src={logo} alt="logo da empresa focos" />
          <p className={styles['nome-empresa']}>Focos</p>
        </div>

        <div className={styles['header-pesquisa']}> {/* Barra de pesquisa */}
          <input type="text" id="searchInput" placeholder="Pesquisar" className={styles['searchInput']} />
          <label htmlFor="searchInput">
            <span>
              <img className={styles['icon-pesquisa']} src={lupa} alt="ícone de pesquisa" />
            </span>
          </label>
        </div>

        <div className={styles['header-btn']}> {/* Botões de login/cadastro ou informações do usuário */}
          {currentUser ? (
            <div className={styles['user-info']}>
              <img
                className={styles['user-icon']}
                src={userIcon}
                alt="Ícone de usuário"
                onClick={togglePopup} // Abre o pop-up ao clicar
              />
              {isPopupOpen && (
                <div className={styles.popup}> {/* Pop-up com as informações do usuário */}
                  <p>Olá, {currentUser.displayName || 'Usuário'}</p>
                  <button onClick={handleLogout} className={styles['btn-form-log']}>Sair</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button title="Cadastre-se" className={styles['btn-form-log']}>Cadastre-se</button>
              <button title="Login" className={styles['btn-form-log']} onClick={handleLogin}>Login</button>
            </>
          )}
        </div>
      </header>

      <aside className={styles.aside}> {/* Sidebar */}
        <div className={styles.sidebar}>
          <a href="#" className={`${styles.sidebarLink} ${styles.active}`}>
            <span className="material-icons">dashboard</span>
            <h3>Biblioteca</h3>
          </a>
          <a href="#" className={styles.sidebarLink}>
            <span className="material-icons">person_outline</span>
            <h3>Visual</h3>
          </a>
          <a href="#" className={styles.sidebarLink}>
            <span className="material-icons">receipt_long</span>
            <h3>Motora</h3>
          </a>
          <a href="#" className={styles.sidebarLink}>
            <span className="material-icons">insights</span>
            <h3>Auditiva</h3>
          </a>
          <a href="#" className={styles.sidebarLink}>
            <span className="material-icons">mail_outline</span>
            <h3>Análise</h3>
          </a>
          <a href="#" className={styles.sidebarLink}>
            <span className="material-icons">settings</span>
            <h3>Configurações</h3>
          </a>
          <a href="#" className={`${styles.sidebarLink} ${styles.logout}`}>
            <span className="material-icons">logout</span>
            <h3>Sair</h3>
            <button onClick={handleLogout}>Sair</button>
          </a>
        </div>
      </aside>

      <section className={styles['container-sessao']}> {/* Conteúdo principal */}
        <div className={styles['titulo-container-sessao']}>
          <h1>Documentação</h1>
          <p>A biblioteca Focos é projetada para facilitar a criação de componentes de interface de usuário acessíveis...</p>
        </div>

        <div className={styles['componentes']}>
          <h2 id='componentes'><u>Componentes:</u></h2>

          <div className={styles['container-componentes']}>
            <div className={styles['conteudo-texto']}>
              <h4 className={styles['title-componente']}>AccessibleButton</h4>
              <p className={styles['par-1']}>Um botão acessível que segue as melhores práticas...</p>
              <p className={styles['par-2']}>
                - `label` (string): Texto descritivo para o botão. <br />
                - `onClick` (function): Função a ser chamada quando o botão é clicado.
              </p>
            </div>
            <div className={styles['text-exemp-cod-1']}>
              <h1 className={styles['title-codigo']}>Exemplo de código: AccessibleButton</h1>
              <div className={styles['code-container']}>
                <pre ref={codeRef1} id="code1">
                  {`import React from 'react';
import { AccessibleButton } from 'focos';

const App = () => {
  const handleClick = () => {
    alert('Aiiii! Isso doeu =(');
  };
  return (
    <div>
      <AccessibleButton label="Clique em mim" onClick={handleClick} />
    </div>
  );
};
export default App;
`}
                </pre>
                <button className={styles["btn-copy"]} onClick={() => copyCode(codeRef1)}>
                  <img className={styles['icon-copy']} src={copy} alt="ícone de cópia" />
                </button>
              </div>
            </div>
          </div>

          <div className={styles['container-componentes-1']}>
            <div className={styles['conteudo-texto']}>
              <h4 className={styles['title-componente']}>AccessibleInput</h4>
              <p className={styles['par-1']}>Um campo de entrada acessível com suporte para rótulos e mensagens de erro...</p>
              <p className={styles['par-2']}>
                - id (string): Identificador exclusivo para o campo de entrada...<br />
                - label (string): Texto descritivo para o campo...
              </p>
            </div>
            <div className={styles['text-exemp-cod-1']}>
              <h1 className={styles['title-codigo']}>Exemplo de código: AccessibleInput</h1>
              <div className={styles['code-container']}>
                <pre ref={codeRef2} id="code2">
                  {`import React, { useState } from 'react';
import {AccessibleInput} from 'focos';

function PaginaExemplo() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Exemplo de página com botão acessível focos</h1>
      <form>
        <AccessibleInput
          id="exampleInput"
          label="Example Input"
          value={inputValue}
          onChange={handleInputChange}
          ariaDescribedBy="inputDescription"
        />
        <p id="inputDescription" style={{ fontSize: '12px', color: '#666' }}>
          Por favor, entre com seu texto aqui!
        </p>
      </form>
    </div>
  );
}

export default PaginaExemplo;
`}
                </pre>
                <button className={styles["btn-copy"]} onClick={() => copyCode(codeRef2)}>
                  <img className={styles['icon-copy']} src={copy} alt="ícone de cópia" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Biblioteca;



