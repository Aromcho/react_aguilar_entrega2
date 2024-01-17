import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  
import CartWidget from '../CartWidget';

const NavBar = () => {
  return (
    <div>
      <header className='barra-nave'>
        <Link to="/" className='link-logo'>
          <img className='logo' src="../public/logo-arom.png" alt="" />
        </Link>
        <nav>
          <ul className='lista-nave'>
            <li>
              <Link to="/" className='cat-nave' id="todas">Todas</Link>
            </li>
            <li>
              <Link to="/product/kawasaki" className='cat-nave' id="kawasaki">Kawasaki</Link>
            </li>
            <li>
              <Link to="/product/honda" className='cat-nave' id="honda">Honda</Link>
            </li>
            <li>
              <Link to="/product/yamaha" className='cat-nave' id="yamaha">Yamaha</Link>
            </li>
            <li>
              <Link to="/product/ktm" className='cat-nave' id="ktm">KTM</Link>
            </li>
            <li>
              <Link to="/product/suzuki" className='cat-nave' id="suzuki">Suzuki</Link>
            </li> 
            <li>
              <Link to="/product/gilera" className='cat-nave' id="gilera">Gilera</Link>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </header>
    </div>
  );
};

export default NavBar;
