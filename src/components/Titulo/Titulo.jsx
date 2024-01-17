import React from 'react';
import './titulo.css'


const Titulo = () => {
  return (
    <div >
        <section className='principal'>
        <div className="partner">
          <h1 className="partner-titulo">Lideres en ventas </h1>
          <h3 className="partner-subtitulo">en todo el pais</h3>
        </div>  
          <img className='logo1' src="../public/logo-arom.png" alt="" />
        </section>
    </div>
  );
};

export default Titulo;