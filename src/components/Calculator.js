import React, { PureComponent, useState } from 'react';
import calculate from '../logic/calculate';

class Calculator extends PureComponent {
  render() {
    return (
      <Task />
    );
  }
}
const Task = () => {
  const [obstate, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const btnOnClick = (e) => {
    const show = () => calculate(obstate, e.target.name);
    setState(show);
  };

  let result;
  const { total, next, operation } = obstate;
  if (total === null && next === null && operation === null) {
    result = 0;
  }
  if (next !== null && total === null) {
    result = next;
  }

  if (next === null && total !== null && operation !== null) {
    result = total + operation;
  }
  if (next !== null && total !== null && operation !== null) {
    result = total + operation + next;
  }
  if (next === null && total !== null && operation === null) {
    result = total;
  }
  return (
    <div className="container">
      <div className="result">
        <p>{result}</p>
      </div>
      <div className="buttons">
        <button type="button" name="AC" onClick={btnOnClick}>AC</button>
        <button type="button" name="+/-" onClick={btnOnClick}>+/-</button>
        <button type="button" name="%" onClick={btnOnClick}>%</button>
        <button type="button" name="/" className="opreator" onClick={btnOnClick}>÷</button>
        <br />

        <button type="button" name="7" onClick={btnOnClick}>7</button>
        <button type="button" name="8" onClick={btnOnClick}>8</button>
        <button type="button" name="9" onClick={btnOnClick}>9</button>
        <button type="button" name="*" className="opreator" onClick={btnOnClick}>x</button>
        <br />
        <button type="button" name="4" onClick={btnOnClick}>4</button>
        <button type="button" name="5" onClick={btnOnClick}>5</button>
        <button type="button" name="6" onClick={btnOnClick}>6</button>
        <button type="button" name="-" className="opreator" onClick={btnOnClick}>-</button>
        <br />
        <button type="button" name="1" onClick={btnOnClick}>1</button>
        <button type="button" name="2" onClick={btnOnClick}>2</button>
        <button type="button" name="3" onClick={btnOnClick}>3</button>
        <button type="button" name="+" className="opreator" onClick={btnOnClick}>+</button>
        <br />
        <button type="button" name="0" className="zero" onClick={btnOnClick}>0</button>
        <button type="button" name="." onClick={btnOnClick}>.</button>
        <button type="button" name="=" className="opreator" onClick={btnOnClick}>=</button>
        <br />
      </div>
    </div>
  );
};
export default Calculator;
