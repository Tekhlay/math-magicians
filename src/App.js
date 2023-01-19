import React, { PureComponent } from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Qoutes';
import Links from './components/Links';

class App extends PureComponent {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Links />}>
              <Route index element={<Home />} />
              <Route path="calculator" element={<Calculator />} />
              <Route path="quote" element={<Quote />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
