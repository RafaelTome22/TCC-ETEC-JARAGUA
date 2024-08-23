import React from 'react';
import '../styles/biblioteca.css'
import logo from '../assets/logo.png'
import lupa from '../assets/lupa.png'
import user from '../assets/user.png'
import mao from '../assets/mao.png'
import olho from '../assets/olho.png'
import livro from '../assets/livro.png'
import orelha from '../assets/orelha.png'


function Biblioteca() {
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
          <img className = 'user'
          src={user}
          alt='imagem usuario'
          />

          <div className= "retangulo-direito">

          <img className = 'livro' src={livro} alt='imagem livro'/>
          <br></br>
          <img className = 'olho' src={olho} alt='imagem mao'/>
          <br></br>
          <img className = 'mao' src={mao} alt='imagem olho'/>
          <br></br>
          <img className = 'orelha' src={orelha} alt='imagem orelha'/>
          </div>

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



export default Biblioteca;