/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../style.css';

const Links = () => (
  <nav>
    <div className="header">
      <h1>Math Magicians</h1>
      <section className="nav-link">
        <Link to="/" className="nav-item"> Home</Link>
        <h2>|</h2>
        <Link to="/calculator" className="nav-item">Calculator</Link>
        <h2>|</h2>
        <Link to="/Quote" className="nav-item">Quote</Link>
      </section>
    </div>
    <Outlet />
  </nav>
);

export default Links;
