import { useAuth } from '../../AuthContext';
import React, { useState } from 'react';
import '../../styles/home.css';

function HomePage() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const [popupVisible, setPopupVisible] = useState(true);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [vermelho, setVermelho] = useState(0);
  const [verde, setVerde] = useState(0);
  const [azul, setAzul] = useState(0);

  const handleChange = (color, value) => {
    switch (color) {
      case 'red':
        setRed(value);
        break;
      case 'green':
        setGreen(value);
        break;
      case 'blue':
        setBlue(value);
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

  const textColor = `rgb(${vermelho}, ${verde}, ${azul})`;

  const Color = `rgb(${red}, ${green}, ${blue})`;

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
      <div id="popup" style={{ visibility: popupVisible ? 'visible' : 'hidden' }}>
        <h3>Menu</h3>
        <h4>Fonte</h4>
        <button onClick={changeFontSizeAumenta} className="aumenta">A+</button>
        <button onClick={changeFontSizeDiminui} className="diminui">A-</button>
        <button onClick={toggleBold} className="bold">N</button>
        <button onClick={toggleItalic} className="italico">I</button>
        <div id="Dauto">
          <a className="a" style={{ display: 'inline-block' }}>Deuteranopia</a>
          <input type="radio" name="opcao" />
          <input type="range" id="deute" min="0" max="255" value={red} onChange={(e) => handleChange('red', e.target.value)} />
          <br /><br />
          <a className="a" style={{ display: 'inline-block' }}>Protanopia</a>
          <input type="radio" name="opcao" />
          <input type="range" id="prota" min="0" max="255" value={green} onChange={(e) => handleChange('green', e.target.value)} />
          <br /><br />
          <a className="a" style={{ display: 'inline-block' }}>Tritanopia</a>
          <input type="radio" name="opcao" />
          <input type="range" id="trito" min="0" max="255" value={blue} onChange={(e) => handleChange('blue', e.target.value)} />
          <br/><br/>
          <a className="a" style={{ display: 'inline-block' }}>Cor fonte</a>
          <input type="radio" name="opcao" />
          <br/>
          <a className="a" style={{ display: 'inline-block' }}>red</a>
          <br/>
          <input type="range" name="red" min="0" max="255" value={vermelho} onChange={(e) => TrocaFonte('vermelho', e.target.value)} />
          <br/>
          <a className="a" style={{ display: 'inline-block' }}>green</a>
          <br/>
          <input type="range" name="green" min="0" max="255" value={verde} onChange={(e) => TrocaFonte('verde', e.target.value)} />
          <br/>
          <a className="a" style={{ display: 'inline-block' }}>blue</a>
          <br/>
          <input type="range" name="blue" min="0" max="255" value={azul} onChange={(e) => TrocaFonte('azul', e.target.value)} />
        </div>
      </div>
      <button className="menu" onClick={togglePopupVisibility}>Menu</button>
      <div className="texto" style={{ color: textColor }}>
        <p>Muda Fonte</p>
      </div>

      <div className="Cores">
        <img id="image" src='https://www.pngall.com/wp-content/uploads/11/Red-Apple-PNG.png' style={{ filter: `hue-rotate(${red}deg) saturate(500%) brightness(${green}%) contrast(${blue}%)` }} alt="imagem" />
      </div>
      
      <button className="logout" onClick={handleLogout}>Logout</button>
      <button className="logout" onClick={handleLogout}>Logout</button>
      <button className="logout" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default HomePage;
