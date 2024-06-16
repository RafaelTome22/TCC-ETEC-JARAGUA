import { useAuth } from '../../AuthContext';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
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
  /*const [disabled1, setDisabled1] = useState(false);
  const [disabled2, setDisabled2] = useState(false);
  const [disabled3, setDisabled3] = useState(false);*/
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

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

  const colorFilter = `rgb(${red}, ${green}, ${blue})`;

  function togglePopupVisibility() {
    setPopupVisible(!popupVisible);
  }

  /*function MudaDisable(Btn) {
    if (Btn === 1) {
      setDisabled1(false);
      setDisabled2(true);
      setDisabled3(true);
    } else if (Btn === 2) {
      setDisabled1(true);
      setDisabled2(false);
      setDisabled3(true);
    } else {
      setDisabled1(true);
      setDisabled2(true);
      setDisabled3(false);
    }
  }
  */

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
          <input type="radio" name="opcao" /*onClick={() => MudaDisable(1)}*/ />
          <input type="range" /*disabled={disabled1}*/ id="deute" min="0" max="255" value={red} onChange={(e) => handleChange('red', e.target.value)} />
          <br /><br />
          <a className="a" style={{ display: 'inline-block' }}>Protanopia</a>
          <input type="radio" name="opcao" /*onClick={() => MudaDisable(2)}*/ />
          <input type="range" /*disabled={disabled2}*/ id="prota" min="0" max="255" value={green} onChange={(e) => handleChange('green', e.target.value)} />
          <br /><br />
          <a className="a" style={{ display: 'inline-block' }}>Tritanopia</a>
          <input type="radio" name="opcao" /*onClick={() => MudaDisable(3)}*/ />
          <input type="range" /*disabled={disabled3}*/ id="trito" min="0" max="255" value={blue} onChange={(e) => handleChange('blue', e.target.value)} />
        </div>
      </div>
      <button className="menu" onClick={togglePopupVisibility}>Menu</button>
      <div className="texto">
        <p>Muda Fonte</p>
      </div>
      <div className="Cores">
        <img id="image" src='https://www.pngall.com/wp-content/uploads/11/Red-Apple-PNG.png' style={{ filter: `hue-rotate(${red}deg) saturate(500%) brightness(${green}%) contrast(${blue}%)` }} alt="imagem" />
      </div>
      <button className="logout" onClick={handleLogout}>Logout</button>
      <button className="quiz" onClick={handleQuizRedirect}>Quiz</button>
    </div>
  );
}

export default HomePage;
