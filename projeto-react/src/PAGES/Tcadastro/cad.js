import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { insercao } from '../../services/funcaoBD';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import bcrypt from 'bcryptjs'; 
import '../../styles/cad.css';

library.add(fab);

function gira() {
  const container = document.getElementById('container');
  const registerBtn = document.getElementById('register');

  registerBtn.addEventListener('click', () => {
    container.classList.add("active");
  });
}

function remove() {
  const container = document.getElementById('container');
  const loginBtn = document.getElementById('login');

  loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
  });
}

async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

function SignupPage() {

  const [nome, setNome] = useState("");
  const [senha, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginSenha, setLoginSenha] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const hashedPassword = await hashPassword(senha);
    await insercao([nome, email, hashedPassword], setNome, setEmail, setPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, loginEmail, loginSenha);
      history.push("/home");
    } catch (error) {
      console.error("Error logging in:", error);
      // Tratamento de erro
    }
  };

  return (
    <div className='container' id='container'>
      <div className='form-container sing-up'>
        <form>
          <h1>Cadastra-se já!</h1>
          <div className='social-icons'>
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
          </div>
          <span>Use seu Email e Senha</span>
          <input
            type='text'
            value={nome}
            placeholder='Nome'
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type='email'
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            value={senha}
            placeholder='Senha'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignup}>Cadastrar</button>
        </form>
      </div>

      <div className='form-container sing-in'>
        <form>
          <h1>Entre com</h1>
          <div className='social-icons'>
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
          </div>
          <span>Ou use seu Email e Senha</span>
          <input 
              type='email' 
              value={loginEmail}
              placeholder='Email' 
              onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input 
              type='password' 
              value={loginSenha}
              placeholder='Senha' 
              onChange={(e) => setLoginSenha(e.target.value)}
          />

          <a href='#'>Esqueceu sua senha?</a>
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>

      <div className='toggle-container'>
        <div className='toggle'>
          <div className='toggle-panel toggle-left'>
            <h1>Bem-vindo!</h1>
            <p>Entre com a sua conta para desfrutar de todos os recursos do site.</p>
            <button className='hidden' id='login' onClick={remove}>Login</button>
          </div>
          <div className='toggle-panel toggle-right'>
            <h1>Olá, visitante!</h1>
            <p>Registre-se com seus dados pessoais para desfrutar de todos os recursos do site.</p>
            <button className='hidden' id='register' onClick={gira}>Cadastre-se</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;