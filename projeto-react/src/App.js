import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

//npm install react-scripts
//npm install firebase
//npm install react-router-dom
// npm start - roda

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
