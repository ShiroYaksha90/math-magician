import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

function Calculatore() {
  const [state, setState] = useState({
    total: null,
    nexr: null,
    operation: null,
  });
  const handleClick = (name) => {
    const result = calculate(state, name);
    setState(result);
  };

  return (
    <div className="main-container">
      <div className="screen">
        {state.next || state.total || state.operation || '0'}
      </div>
      <div className="cal">
        <button
          type="button"
          className="keypad"
          onClick={(event) => handleClick(event.target.value)}
          value="AC"
        >
          AC
        </button>
        <button
          type="button"
          className="keypad"
          onClick={(event) => handleClick(event.target.value)}
          value="+/-"
        >
          +/-
        </button>
        <button
          type="button"
          className="keypad"
          onClick={(event) => handleClick(event.target.value)}
          value="%"
        >
          %
        </button>
        <button
          type="button"
          className="keypad color"
          onClick={(event) => handleClick(event.target.value)}
          value="&#247;"
        >
          &#247;
        </button>
        <button
          type="button"
          className="keypad"
          onClick={(event) => handleClick(event.target.value)}
          value="7"
        >
          7
        </button>
        <button
          type="button"
          className="keypad"
          onClick={(event) => handleClick(event.target.value)}
          value="8"
        >
          8
        </button>
        <button
          type="button"
          className="keypad"
          onClick={(event) => handleClick(event.target.value)}
          value="9"
        >
          9
        </button>
        <button
          type="button"
          className="keypad color"
          onClick={(event) => handleClick(event.target.value)}
          value="x"
        >
          <bold>x</bold>
        </button>
        <button
          type="button"
          className="keypad"
          onClick={(event) => handleClick(event.target.value)}
          value="4"
        >
          4
        </button>
        <button
          type="button"
          className="keypad"
          onClick={(event) => handleClick(event.target.value)}
          value="5"
        >
          5
        </button>
        <button
          type="button"
          className="keypad"
          onClick={(event) => handleClick(event.target.value)}
          value="6"
        >
          6
        </button>
        <button
          type="button"
          className="keypad color"
          onClick={(event) => handleClick(event.target.value)}
          value="-"
        >
          -
        </button>
        <button
          type="button"
          className="keypad"
          onClick={(event) => handleClick(event.target.value)}
          value="1"
        >
          1
        </button>
        <button
          type="button"
          className="keypad"
          onClick={(event) => handleClick(event.target.value)}
          value="2"
        >
          2
        </button>
        <button
          type="button"
          className="keypad"
          onClick={(event) => handleClick(event.target.value)}
          value="3"
        >
          3
        </button>
        <button
          type="button"
          className="keypad color"
          onClick={(event) => handleClick(event.target.value)}
          value="+"
        >
          +
        </button>
      </div>
      <div className="lastrow">
        <button
          type="button"
          className="keypad"
          onClick={(event) => handleClick(event.target.value)}
          value="0"
        >
          0
        </button>
        <button
          type="button"
          className="keypad"
          onClick={(event) => handleClick(event.target.value)}
          value="."
        >
          .
        </button>
        <button
          type="button"
          className="keypad color"
          onClick={(event) => handleClick(event.target.value)}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculatore;
