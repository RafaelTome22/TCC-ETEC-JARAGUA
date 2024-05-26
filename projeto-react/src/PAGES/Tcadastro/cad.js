import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from '../../BD/firebase';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import { insercao } from '../../services/funcaoBD';
import '../../styles/cad.css';

library.add(fab);

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
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!nome || !email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    const hashedPassword = await hashPassword(senha);
    await insercao([nome, email, hashedPassword], setNome, setEmail, setPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginEmail || !loginSenha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginSenha);
      navigate("/home");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Erro ao fazer login. Verifique suas credenciais e tente novamente.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch (error) {
      console.error("Error logging in with Google:", error);
      alert("Erro ao fazer login com Google. Tente novamente.");
    }
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id='container'>
      <div className='form-container sign-up'>
        <form onSubmit={handleSignup}>
          <h1>Cadastre-se já!</h1>
          <div className='social-icons'>
            <a href='#' className='icon' onClick={handleGoogleLogin}>
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
          <button type='submit'>Cadastrar</button>
        </form>
      </div>

      <div className='form-container sign-in'>
        <form onSubmit={handleLogin}>
          <h1>Entre com</h1>
          <div className='social-icons'>
            <a href='#' className='icon' onClick={handleGoogleLogin}>
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
          <button type='submit'>Login</button>
        </form>
      </div>

      <div className='toggle-container'>
        <div className='toggle'>
          <div className='toggle-panel toggle-left'>
            <h1>Bem-vindo!</h1>
            <p>Entre com a sua conta para desfrutar de todos os recursos do site.</p>
            <button id='login' onClick={() => setIsActive(false)}>Login</button>
          </div>
          <div className='toggle-panel toggle-right'>
            <h1>Olá, visitante!</h1>
            <p>Registre-se com seus dados pessoais para desfrutar de todos os recursos do site.</p>
            <button id='register' onClick={() => setIsActive(true)}>Cadastre-se</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
