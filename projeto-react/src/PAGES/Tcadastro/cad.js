import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {insercao} from '../../services/funcaoBD';
import '../../styles/cad.css';


library.add(fab);



function gira(){
  const container = document.getElementById('container');
  const registerBtn = document.getElementById('register');

  registerBtn.addEventListener('click', () => {
      container.classList.add("active");
  });

}

function remove(){
  const container = document.getElementById('container');
  const loginBtn = document.getElementById('login');

  loginBtn.addEventListener('click', () => {
      container.classList.remove("active");
  });
}



function SignupPage() {

    const [nome, setNome] = useState(""); 
    const [senha, setPassword] = useState(""); 
    const [email, setEmail] = useState("");

  return (

      <div className='container' id='container'>
        <div className='form-container sing-up'> {/* cadastro */} 
          <form>
            <h1>Cadastra-se já!</h1> 
            <div className='social-icons'> {/* inicio dos icons */}
              <a href='#' className='icon'> 
                <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
              </a>
              <a href='#' className='icon'>
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </a>
              <a href='#' className='icon'>
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
              <a href='#' className='icon'>
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
              </a>
            </div> {/* fim dos icons */}

            <span>Use seu Email e Senha</span> {/* inicio dos inputs */} 
              <input type='text' 
              value={nome}
              placeholder='Nome'
              onChange={(e) => setNome(e.target.value)}
              /> 

              <input type='email' 
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              />

              <input type='password' 
              value={senha}
              placeholder='Senha'
              onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={async ()=> insercao([nome, email, senha], setNome, setEmail, setPassword)}>Cadastrar</button>
          </form>
        </div> {/* fim docadastro */} 

        <div className='form-container sing-in'> {/* login */} 
          <form>
            <h1>Entre com</h1> 
            <div className='social-icons'> {/* inicio dos icons */}
              <a href='#' className='icon'> 
                <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
              </a>
              <a href='#' className='icon'>
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </a>
              <a href='#' className='icon'>
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
              <a href='#' className='icon'>
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
              </a>
            </div> {/* fim dos icons */}

            <span>Ou use seu Email e Senha</span> {/* inicio dos inputs */} 
              <input type='email' placeholder='Email'/>
              <input type='password' placeholder='Senha'/>
              <a href='#'>Esqueceu sua senha?</a>
              <button>Login</button>
          </form>
        </div> {/* fim do login */}

        <div className='toggle-container'>
          <div className='toggle'>
            <div className='toggle-panel toggle-left'>
              <h1>Bem-vindo!</h1>
              <p>Entre com a sua conta para desfrutar de todos os recursos do site.</p>
              <button className='hidden' id='login' onClick={ ()=> remove()}>Login</button>
            </div>
            <div className='toggle-panel toggle-right'>
              <h1>Olá, visitante!</h1>
              <p>Registre-se com seus dados pessoais para desfrutar de todos os recursos do site.</p>
              <button className='hidden' id='register' onClick={ ()=> gira()}>Cadastre-se</button>
            </div>
          </div>
        </div>
      </div>

    /*
    <div className='main'>
      
        <form>
          <label>Nome:</label> <br/> 
          <input type='text'
          value={nome}
          placeholder='Digite seu Nome'
          onChange={(e) => setNome(e.target.value)}
          /> <br/> 


          <label>Email:</label> <br/> 
          <input type='email' 
          value={email}
          placeholder='Digite seu Email'
          onChange={(e) => setEmail(e.target.value)}
          />
          <br/>

          <label>Senha:</label> <br/> 
          <input type='password' 
          value={senha}
          placeholder='Nova Senha'
          onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <button onClick={async ()=> insercao([nome, email, senha], setNome, setEmail, setPassword)}>Cadastra-se</button>
    </div>

    */
    
  );
}
export default SignupPage;