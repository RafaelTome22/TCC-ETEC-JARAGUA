import { useAuth } from '../../AuthContext';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';
import '../../styles/home.css';

function HomePage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  const handleQuizRedirect = () => {
    navigate('/quiz'); // Redirect to quiz page
  };

  const [popupVisible, setPopupVisible] = useState(true);
  const [deuto, setDeuto] = useState(0); // Red filter
  const [prota, setProta] = useState(100); // Green filter
  const [trito, setTrito] = useState(100); // Blue filter
  const [vermelho, setVermelho] = useState(0);
  const [verde, setVerde] = useState(0);
  const [azul, setAzul] = useState(0);
  const [bgRed, setBgRed] = useState(255);
  const [bgGreen, setBgGreen] = useState(255);
  const [bgBlue, setBgBlue] = useState(255);

  useEffect(() => {
    document.body.style.backgroundColor = `rgb(${bgRed}, ${bgGreen}, ${bgBlue})`;
  }, [bgRed, bgGreen, bgBlue]);

  const handleChange = (color, value) => {
    switch (color) {
      case 'deuto':
        setDeuto(value);
        break;
      case 'prota':
        setProta(value);
        break;
      case 'trito':
        setTrito(value);
        break;
      default:
        break;
    }
  };

  const TrocaFonte = (color, value) => {
    switch (color) {
      case 'vermelho':
        setVermelho(value);
        break;
      case 'verde':
        setVerde(value);
        break;
      case 'azul':
        setAzul(value);
        break;
      default:
        break;
    }
  };

  const changeBackgroundColor = (color, value) => {
    switch (color) {
      case 'bgRed':
        setBgRed(value);
        break;
      case 'bgGreen':
        setBgGreen(value);
        break;
      case 'bgBlue':
        setBgBlue(value);
        break;
      default:
        break;
    }
  };

  const textColor = `rgb(${vermelho}, ${verde}, ${azul})`;

  function togglePopupVisibility() {
    setPopupVisible(!popupVisible);
  }

  function changeFontSizeAumenta() {
    const paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i++) {
      let currentSize = parseInt(paragraphs[i].style.fontSize) || 16;
      currentSize += 3;
      if (currentSize <= 100) {
        paragraphs[i].style.fontSize = currentSize + 'px';
      } else {
        paragraphs[i].style.fontSize = '100px';
      }
    }
  }

  function changeFontSizeDiminui() {
    const paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i++) {
      let currentSize = parseInt(paragraphs[i].style.fontSize) || 16;
      if (currentSize > 15) {
        currentSize -= 3;
        if (currentSize >= 10) {
          paragraphs[i].style.fontSize = currentSize + 'px';
        } else {
          paragraphs[i].style.fontSize = '10px';
        }
      }
    }
  }

  function toggleBold() {
    const paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i++) {
      if (paragraphs[i].style.fontWeight === '700') {
        paragraphs[i].style.fontWeight = 'normal';
      } else {
        paragraphs[i].style.fontWeight = '700';
      }
    }
  }

  function toggleItalic() {
    const paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i++) {
      if (paragraphs[i].style.fontStyle === 'italic') {
        paragraphs[i].style.fontStyle = 'normal';
      } else {
        paragraphs[i].style.fontStyle = 'italic';
      }
    }
  }

  return (
    <div>
      <Draggable cancel="input,button">
        <div id="popup" style={{ visibility: popupVisible ? 'visible' : 'hidden' }}>
          <button className="close" onClick={togglePopupVisibility}>X</button>
          <h3>Menu</h3>
          <h4>Fonte</h4>
          <button onClick={changeFontSizeAumenta} className="aumenta">A+</button>
          <button onClick={changeFontSizeDiminui} className="diminui">A-</button>
          <button onClick={toggleBold} className="bold">N</button>
          <button onClick={toggleItalic} className="italico">I</button>
          <h4>Cores da Imagem</h4>
          <div id="Dauto">
            <label>Cor</label>
            <input type="range" id="deute" min="0" max="255" value={deuto} onChange={(e) => handleChange('deuto', e.target.value)} />
            <label>Saturação</label>
            <input type="range" id="prota" min="0" max="255" value={prota} onChange={(e) => handleChange('prota', e.target.value)} />
            <label>Brilho</label>
            <input type="range" id="trito" min="0" max="255" value={trito} onChange={(e) => handleChange('trito', e.target.value)} />
            <h4>Cor da Fonte</h4>
            <label>Red</label>
            <input type="range" name="red" min="0" max="255" value={vermelho} onChange={(e) => TrocaFonte('vermelho', e.target.value)} />
            <label>Green</label>
            <input type="range" name="green" min="0" max="255" value={verde} onChange={(e) => TrocaFonte('verde', e.target.value)} />
            <label>Blue</label>
            <input type="range" name="blue" min="0" max="255" value={azul} onChange={(e) => TrocaFonte('azul', e.target.value)} />
            <h4>Cor do Background</h4>
            <label>Red</label>
            <input type="range" name="bgRed" min="0" max="255" value={bgRed} onChange={(e) => changeBackgroundColor('bgRed', e.target.value)} />
            <label>Green</label>
            <input type="range" name="bgGreen" min="0" max="255" value={bgGreen} onChange={(e) => changeBackgroundColor('bgGreen', e.target.value)} />
            <label>Blue</label>
            <input type="range" name="bgBlue" min="0" max="255" value={bgBlue} onChange={(e) => changeBackgroundColor('bgBlue', e.target.value)} />
          </div>
        </div>
      </Draggable>
      <button className="menu" onClick={togglePopupVisibility}>Menu</button>
      <div className="texto" style={{ color: textColor }}>
        <p>Exemplo de mudança de fonte</p>
      </div>
      <div className="Cores">
        <img id="image" src='https://www.pngall.com/wp-content/uploads/11/Red-Apple-PNG.png' style={{ filter: `hue-rotate(${deuto}deg) saturate(${prota}%) brightness(${trito}%)` }} alt="imagem" />
      </div>
      <button className="logout" onClick={handleLogout}>Logout</button>
      <button className="quiz" onClick={handleQuizRedirect}>Quiz</button>
    </div>
  );
}

export default HomePage;
