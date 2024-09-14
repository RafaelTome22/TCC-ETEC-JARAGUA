import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../BD/firebase';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { googleProvider } from '../BD/firebase';
import { useNavigate, useLocation } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem('User');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        localStorage.setItem('User', JSON.stringify(user));
      } else {
        setCurrentUser(null);
        localStorage.removeItem('User');
      }
    });
    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const previousPage = location.state?.from || '/';
      setCurrentUser(user);
      localStorage.setItem('User', JSON.stringify(user));
      navigate(previousPage);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Verifique suas credenciais e tente novamente.");
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const previousPage = location.state?.from || '/';
      setCurrentUser(user);
      localStorage.setItem('User', JSON.stringify(user));
      navigate(previousPage);
    } catch (error) {
      console.error("Erro ao fazer login com Google:", error);
      alert("Erro ao fazer login com Google. Tente novamente.");
    }
  };

  const logout = async () => {
    await signOut(auth);
    setCurrentUser(null);
    localStorage.removeItem('User');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
