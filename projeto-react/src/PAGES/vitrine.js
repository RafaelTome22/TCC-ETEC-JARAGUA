import React, { useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/authContext'; // Importa o contexto de autenticação
import styles from '../styles/vitrine.module.css';
import logo from '../assets/logo.png';
import lupa from '../assets/lupa.png';
import copy from '../assets/documento.png';
import userIcon from '../assets/user.png'; // Um ícone de usuário para quando o user estiver logado

function Vitrine() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, logout } = useAuth(); // Obtém o usuário atual e a função de logout

  const [isPopupOpen, setIsPopupOpen] = useState(false); // Estado para controlar o pop-up

  const handleLogin = () => {
    navigate('/login', { state: { from: location.pathname } });
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/'); // Redireciona para a página de login após logout
    } catch (error) {
      console.error('Erro ao sair:', error);
    }
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

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen); // Alterna o pop-up
  };

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
                  <p>Olá, {currentUser.displayName}</p>
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
        </div> {/* Fim do header botões de login e cadastro */}
      </header> {/* Fim do header */}

      <div className='apresentacao'> {/* inicio do container de apresentação */}
        <div className='conteudo-apresentacao'> {/* inicio do container de conteudo da apresentação */}
            <div className='texto-conteudo-apresentacao'> {/* inicio do container de texto do conteudo da apresentação */}
              <h1 className='titulo-apresentacao'>Bem-vindo ao Focos </h1>
            </div> {/* fim do container de texto do conteudo da apresentação */}
            <div className='image-conteudo-apresentacao'> {/* inicio do container de imagem do conteudo da apresentação */}

            </div> {/* fim do container de texto do conteudo da apresentação */}
        </div> {/* fim do container de conteudo da apresentação */}
      </div> {/* fim do container de apresentação */}

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
                  <img className={styles['icon-copy']} src={copy} alt="ícone de cópia" />
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
          <button className={'teste'} onClick={() => navigate('/biblioteca')}>opa</button>
        </div>
      </article>
    </div>
  );
}

export default Vitrine;
