import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Recupera dados do local storage quando a pagina é iniciada
    const storedUser = localStorage.getItem('User');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('User', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('User');
  };

  return (
    <UserContext.Provider value={{ user, login, logout, }}>
      {children}
    </UserContext.Provider>
  );
};