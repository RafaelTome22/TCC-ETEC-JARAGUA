import { useAuth } from '../../AuthContext';
import React, { useState } from 'react';
import '../../styles/home.css'

function HomePage() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const [popupVisible, setPopupVisible] = useState(true);
  const [disabled1, setDisabled1] = useState(false);
  const [disabled2, setDisabled2] = useState(false);
  const [disabled3, setDisabled3] = useState(false);
  

  function togglePopupVisibility() {
    setPopupVisible(!popupVisible);
  }

  function MudaDisable(Btn){
    if(Btn == 1){
      setDisabled1(false)
      setDisabled2(true)
      setDisabled3(true)
    }else if(Btn == 2){
      setDisabled1(true)
      setDisabled2(false)
      setDisabled3(true)
    }else{
      setDisabled1(true)
      setDisabled2(true)
      setDisabled3(false)
    }
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

      if(paragraphs[i].style.fontWeight === '700'){
        paragraphs[i].style.fontWeight = 'normal';
      }
      else{
        paragraphs[i].style.fontWeight = '700';
      }
    }
  }

  
  function toggleItalic() {
    const paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i++) {

      if(paragraphs[i].style.fontStyle === 'italic'){
        paragraphs[i].style.fontStyle = 'normal';
      }
      else{
        paragraphs[i].style.fontStyle = 'italic';
      }
    }
  }

  /*function changeDeuteColor(event) {
    const value = event.target.value;
    const image = document.getElementById('image');
    const corInicial = 'invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg)';
    const corFinal = 'invert(20%) sepia(100%) saturate(30%) hue-rotate(40deg)';
    const corInterpolada = interpolarCores(corInicial, corFinal, value);
    image.style.filter = corInterpolada;
  }

  function changeProtaColor(event) {
    const value = event.target.value;
    const image = document.getElementById('image');
    const corInicial = 'invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg)';
    const corFinal = 'invert(8%) sepia(100%) saturate(130%) hue-rotate(20deg)';
    const corInterpolada = interpolarCores(corInicial, corFinal, value);
    image.style.filter = corInterpolada;
  }

  function changeTritoColor(event) {
    const value = event.target.value;
    const image = document.getElementById('image');
    const corInicial = 'invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg)';
    const corFinal = 'invert(8%) sepia(100%) saturate(130%) hue-rotate(200deg)';
    const corInterpolada = interpolarCores(corInicial, corFinal, value);
    image.style.filter = corInterpolada;
  }

  function interpolarCores(corInicial, corFinal, valor) {
    const percentInicial = parseFloat(corInicial.match(/\d+/)[0]);
    const percentFinal = parseFloat(corFinal.match(/\d+/)[0]);
    const percentInterpolado = percentInicial + (percentFinal - percentInicial) * (valor / 100);
    return corInicial.replace(/\d+/, percentInterpolado);
  }
    */

  function MudaCor() {
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
  
    const color = `rgb(${red}, ${green}, ${blue})`;

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
            <input type="radio" name="opcao" onClick={() => MudaDisable(1)}/>
           <input type="range" disabled={disabled1} id="deute"   min="0" max="255" value={red} onChange={(e) => handleChange('red', e.target.value)}  />
           <br /><br />
            <a className="a" style={{ display: 'inline-block'}}>Protanopia</a>
            <input type="radio" name="opcao" onClick={() => MudaDisable(2)}/>
            <input type="range" disabled={disabled2} id="prota"  min="0" max="255" value={green} onChange={(e) => handleChange('green', e.target.value)} />
            <br /><br />
            <a className="a" style={{ display: 'inline-block'}}>Tetranotopia</a>
          <input type="radio" name="opcao" onClick={() => MudaDisable(3)}/>
          <input type="range" disabled={disabled3} id="trito"  min="0" max="255" step="1" value={blue} onChange={(e) => handleChange('blue', e.target.value)} />
          </div>
      </div>

      <button className="menu" onClick={togglePopupVisibility}>Menu</button>

      <div className="texto">
        <p>Muda Fonte</p>
      </div>
      

      <div className="Cores">
        <img id="image" src='https://www.pngall.com/wp-content/uploads/11/Red-Apple-PNG.png' background-color={color} alt="imagem" />
      </div>

      
      <button className="logout" onClick={handleLogout}>Logout</button>
    </div>

  );
}

}
export default HomePage;