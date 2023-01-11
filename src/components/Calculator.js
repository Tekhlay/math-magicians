/* eslint-disable react/button-has-type */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <div className="result">
          <input type="text" value={0} />
        </div>
        <div className="buttons">
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button className="opreator">/</button>
          <br />

          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="opreator">x</button>
          <br />
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="opreator">-</button>
          <br />
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="opreator">+</button>
          <br />
          <button className="zero"> 0 </button>
          <button>.</button>
          <button className="opreator">=</button>
          <br />
        </div>
      </div>
    );
  }
}
export default Calculator;
