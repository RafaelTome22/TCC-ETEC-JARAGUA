import React from 'react';
import styles from '../styles/vitrine.module.css';
import logo from '../assets/logo.png';
import lupa from '../assets/lupa.png';

function Vitrine() {
  return (
    <div className={styles.all}>  {/*Começo da página vitrine*/}
      <header className={styles['header-main']}> {/*Começo do header*/}
        <div className={styles['header-info']}> {/*Começo do header de info*/}
          <img className={styles.logo}
              src={logo}
              alt='logo da empresa focos'
          />
          <p className={styles['nome-empresa']}>Focos</p>
        </div> {/*Fim do header de info*/}
        <div className={styles['header-pesquisa']}>
          <input type='text' id='searchInput' placeholder='Pesquisar' className={styles['searchInput']} />
          <label htmlFor="searchInput">
            <span>
              <img
                className={styles['icon-pesquisa']}
                src={lupa}
                alt="ícone de pesquisa"
              />
            </span>
          </label>
        </div>
        <div className={styles['header-btn']}> {/*Começo do header botoes de login e cadastro*/}
          <button title='Cadastre-se' className={styles['btn-form-log']}>Cadastre-se</button>
          <button title='Login' className={styles['btn-form-log']}>Login</button>
        </div> {/*Fim do header botoes de login e cadastro*/}
      </header> {/*Fim do header*/}

      <article className={styles['article-body']}>
        <div className={styles['article-main']}>
          <div className={styles['exemp-cod']}>
            <div className={styles['text-exemp-cod']}>
                <h1>Exemplo de Código</h1>
            </div> 
          </div>
          <div className={styles['text-exemp']}>
            
          </div>
        </div>
      </article>
    </div>
  );
}

export default Vitrine;