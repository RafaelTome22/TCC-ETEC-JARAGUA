import React, { useState } from 'react';

function ColorPicker() {
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
      <h2>Modificar as cores do padrão RGB</h2>
      <div style={{ border: '1px solid', height: '80px', backgroundColor: color }}></div>
      <div style={{ textAlign: 'center' }}>RGB ({red}, {green}, {blue})</div>
      <div>
        <label htmlFor="slideRed">RED</label>
        <input 
          type="range" 
          name="slideRed" 
          id="slideRed" 
          value={red} 
          min="0" 
          max="255" 
          onChange={(e) => handleChange('red', e.target.value)} 
        />
        <output id="valorRed">{red}</output>
      </div>
      <div>
        <label htmlFor="slideGreen">GREEN</label>
        <input 
          type="range" 
          name="slideGreen" 
          id="slideGreen" 
          value={green} 
          min="0" 
          max="255" 
          onChange={(e) => handleChange('green', e.target.value)} 
        />
        <output id="valorGreen">{green}</output>
      </div>
      <div>
        <label htmlFor="slideBlue">BLUE</label>
        <input 
          type="range" 
          name="slideBlue" 
          id="slideBlue" 
          value={blue} 
          min="0" 
          max="255" 
          onChange={(e) => handleChange('blue', e.target.value)} 
        />
        <output id="valorBlue">{blue}</output>
      </div>
    </div>
  );
}

export default ColorPicker;
