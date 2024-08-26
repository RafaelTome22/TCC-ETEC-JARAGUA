import React from 'react';
import styles from '../styles/biblioteca.module.css';
import logo from '../assets/logo.png';

function Biblioteca() {
  return (
    <div className={styles.all}> {/*Começo da página vitrine*/}
      <header className={styles['header-main']}> {/*Começo do header*/}
        <div className={styles['header-info']}> {/*Começo do header de info*/}
          <img className={styles.logo} src={logo} alt="logo da empresa focos" />
          <p className={styles['nome-empresa']}>Focos</p>
        </div> {/*Fim do header de info*/}
        <div className={styles['header-pesquisa']}>
          <input type="text" id="searchInput" placeholder="Pesquisar" className={styles['searchInput']} />
        </div>
        <div className={styles['header-btn']}> {/*Começo do header botoes de login e cadastro*/}
          <button title="Cadastre-se" className={styles['btn-form-log']}>Cadastre-se</button>
          <button title="Login" className={styles['btn-form-log']}>Login</button>
        </div> {/*Fim do header botoes de login e cadastro*/}
      </header> {/*Fim do header*/}

      <aside className={styles.aside}>
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
          <a href="#" className={`${styles.sidebarLink} ${styles.active}`}>
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
          </a>
        </div>
      </aside>
    </div>
  );
}

export default Biblioteca;
