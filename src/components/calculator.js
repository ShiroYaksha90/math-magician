import React from 'react';
import './calculator.css';

function Calculatore() {
  return (
    <div className="main-container">
      <div className="screen">0</div>
      <div className="cal">
        <button type="button" className="keypad">AC</button>
        <button type="button" className="keypad">+/-</button>
        <button type="button" className="keypad">%</button>
        <button type="button" className="keypad color">&#247;</button>
        <button type="button" className="keypad">7</button>
        <button type="button" className="keypad">8</button>
        <button type="button" className="keypad">9</button>
        <button type="button" className="keypad color"><bold>x</bold></button>
        <button type="button" className="keypad">4</button>
        <button type="button" className="keypad">5</button>
        <button type="button" className="keypad">6</button>
        <button type="button" className="keypad color">-</button>
        <button type="button" className="keypad">1</button>
        <button type="button" className="keypad">2</button>
        <button type="button" className="keypad">3</button>
        <button type="button" className="keypad color">+</button>
      </div>
      <div className="lastrow">
        <button type="button" className="keypad">0</button>
        <button type="button" className="keypad">.</button>
        <button type="button" className="keypad color">=</button>
      </div>
    </div>
  );
}

export default Calculatore;
