import React from 'react';
import '../styles/vitrine.css'

function Vitrine() {
  return (
    <div className="all">  {/*Começo da página vitrine*/}
      <header className="header-main"> {/*Começo do header*/}
        <div className='header-info'> {/*Começo do header de info*/}
            <img></img>
            <p>Focos</p>
        </div> {/*Fim do header de info*/}
        <div className='header-pesquisa'>
            <input className='barra-de-pesquisa'></input>
            <button className='btn-pesquisa'>
                <img></img>
            </button>
        </div>
        <div className='header-btn'> {/*Começo do header botoes de login e cadastro*/}
            <button title='Cadastre-se'>Cadastra-se</button>
            <button title='Login'>Login</button>
        </div> {/*Fim do header botoes de login e cadastro*/}
      </header> {/*Fim do header*/}

      <article className='article-body'>

      </article>
      

    </div>
    //fim da página
  );
}

export default Vitrine;