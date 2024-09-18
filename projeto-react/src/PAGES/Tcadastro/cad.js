import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import bcrypt from 'bcryptjs';
import { useNavigate, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../BD/firebase';
import { insercao } from '../../services/funcaoBD';
import styles from '../../styles/cad.module.css';

library.add(fab);

async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

function validatePassword(password) {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasMinimumLength = password.length >= 8;
  return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars && hasMinimumLength;
}

function SignupPage() {
  const [nome, setNome] = useState("");
  const [senha, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginSenha, setLoginSenha] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [barColor, setBarColor] = useState('red'); // Cor da barra padrão
  const [barHeight, setBarHeight] = useState('4px'); // Altura padrão da barra
  const [hasAlerted, setHasAlerted] = useState(false); // Estado para controlar o alerta
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.backgroundColor = '#c9d6ff';
    document.body.style.background = 'linear-gradient(to right, #e2e2e2, #c9d6ff)';
    document.body.style.display = 'flex';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';
    document.body.style.flexDirection = 'column';
    document.body.style.height = '100vh';
    document.body.style.width = '200vh';

    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.background = '';
      document.body.style.display = '';
      document.body.style.alignItems = '';
      document.body.style.justifyContent = '';
      document.body.style.flexDirection = '';
      document.body.style.height = '';
      document.body.style.width = '';
    };
  }, []);

  useEffect(() => {
    const globalStyles = `*
      {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = globalStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!nome || !email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    if (!validatePassword(senha)) {
      alert("A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.");
      return;
    }
    try {
      const hashedPassword = await hashPassword(senha);
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      await insercao([nome, email, hashedPassword]);
      setNome('');
      setEmail('');
      setPassword('');
      alert("Bem vindo :)");
      navigate("/login");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginEmail || !loginSenha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginSenha);
      const from = location.state?.from || '/';
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      console.error('Erro no login com Google:', error);
      alert('Erro ao fazer login com Google. Tente novamente.');
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Resetar cor e altura da barra
    setBarColor('red');
    setBarHeight('15px');

    if (newPassword.length >= 8) {
      if (validatePassword(newPassword)) {
        setBarColor('green'); // Cor da barra quando a senha é forte
        setBarHeight('15px');  // Aumenta a altura da barra em 5px
      } else {
        setBarColor('yellow'); // Cor da barra quando a senha é mediana
        setBarHeight('15px');  // Aumenta a altura da barra em 5px
      }
    } else if (newPassword.length >= 4) {
      // Se a senha tem pelo menos 4 caracteres e não é válida ainda
      setBarColor('yellow'); // Cor da barra quando a senha é mediana
      setBarHeight('15px');  // Aumenta a altura da barra em 5px
    } else if (newPassword.length === 0) {
      // Se a senha estiver vazia, reseta a barra
      setBarColor('red'); // Cor da barra padrão
      setBarHeight('9px'); // Altura padrão da barra
    }
  };

  const handlePasswordFocus = () => {
    if (!hasAlerted) {
      alert("Para uma senha segura, digite no mínimo 8 caracteres, incluindo letras maiúsculas, números e caracteres especiais.");
      setHasAlerted(true);
    }
  };

  return (
    <div className={`${styles.container} ${isActive ? styles.active : ''}`} id='container'>
      <div className={`${styles.formContainer} ${styles.signUp}`}>
        <form onSubmit={handleSignup}>
          <h1>Cadastre-se já!</h1>
          <div className={styles.socialIcons}>
            <a href='#' className={styles.icon} onClick={handleGoogleLogin}>
              <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
              Continue com sua conta Google
            </a>
          </div>
          <span>Use seu Email e Senha</span>
          <input
            type='text'
            value={nome}
            placeholder='Nome'
            onChange={(e) => setNome(e.target.value)}
            className={styles.input}
          />
          <input
            type='email'
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <input
            type='password'
            value={senha}
            placeholder='Senha'
            onChange={handlePasswordChange}
            onFocus={handlePasswordFocus}
            className={styles.input}
          />
          <div className={styles.barsContainer}>
            <div 
              className={styles.bar} 
              style={{ backgroundColor: barColor, height: barHeight }} >
              </div>
          </div>
          <button type='submit' className={styles.button}>Cadastrar</button>
        </form>
      </div>

      <div className={`${styles.formContainer} ${styles.signIn}`}>
        <form onSubmit={handleLogin}>
          <h1>Entre com</h1>
          <div className={styles.socialIcons}>
            <a href='#' className={styles.icon} onClick={handleGoogleLogin}>
              <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
              Continue com a sua conta Google
            </a>
          </div>
          <span>Ou use seu Email e Senha</span>
          <input
            type='email'
            value={loginEmail}
            placeholder='Email'
            onChange={(e) => setLoginEmail(e.target.value)}
            className={styles.input}
          />
          <input
            type='password'
            value={loginSenha}
            placeholder='Senha'
            onChange={(e) => setLoginSenha(e.target.value)}
            className={styles.input}
          />
          <a href='PasswordReset' className={styles.aPass}>Esqueceu sua senha?</a>
          <button type='submit' className={styles.button}>Login</button>
        </form>
      </div>

      <div className={styles.toggleContainer}>
        <div className={styles.toggle}>
          <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
            <h1>Bem-vindo!</h1>
            <p>Entre com a sua conta para desfrutar de todos os recursos do site.</p>
            <button id='login' onClick={() => setIsActive(false)} className={styles.button}>Login</button>
          </div>
          <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
            <h1>Olá, visitante!</h1>
            <p>Registre-se com seus dados pessoais para desfrutar de todos os recursos do site.</p>
            <button id='register' onClick={() => setIsActive(true)} className={styles.button}>Cadastre-se</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
