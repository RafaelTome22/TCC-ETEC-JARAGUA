import React from 'react';
import '../styles/vitrine.css'
import logo from '../assets/logo.png'
import lupa from '../assets/lupa.png'

function Vitrine() {
  return (
    <div className="all">  {/*Começo da página vitrine*/}
      <header className="header-main"> {/*Começo do header*/}
        <div className='header-info'> {/*Começo do header de info*/}
        <img className='logo'
                src={logo}
                alt='logo da empresa focos'
                />
            <p className='nome-empresa'>Focos</p>
        </div> {/*Fim do header de info*/}
        <div className='header-pesquisa'>
        <input type='text' id='searchInput' placeholder='Pesquisar' />
          <label for="searchInput">
            <span >
              <img
              className='icon-pesquisa'
                src={lupa}
              />
            </span>
          </label>
        </div>
        <div className='header-btn'> {/*Começo do header botoes de login e cadastro*/}
            <button title='Cadastre-se' className='btn-form-log'>Cadastra-se</button>
            <button title='Login' className='btn-form-log'>Login</button>
        </div> {/*Fim do header botoes de login e cadastro*/}
      </header> {/*Fim do header*/}

      <article className='article-body'>
        <div className='article-main'>
          <div className=''></div>
        </div>
      </article>
      

    </div>
    //fim da página
  );
}

export default Vitrine;