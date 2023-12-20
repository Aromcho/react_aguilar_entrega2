import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div >
        <header className='barra-nave'>
            <img className='logo' src="/logo-arom.png" alt="" />
            <nav>
                <ul className='lista-nave'>
                    <li className='cat-nave'><button>Home</button></li>
                    <li className='cat-nave'><button>Marcas <span className='flechita'>&#9660;</span></button></li>
                    <li className='cat-nave'><button>Estilos <span className='flechita'>&#9660;</span></button></li>
                    <li className='cat-nave'><button>Tienda</button></li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    </div>
  );
};

export default NavBar;