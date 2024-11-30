import React from 'react';
import '../assets/styles/sections/Header.css';

const Header: React.FC = () => {
  return (
    <header className="cabecalho">
      <div className='cabecalho-container'>
        <a className="cabecalho-principal">Débora Larissa</a>
        <div className="cabecalho-menu-mobile">&#9776;</div>
        <nav className="cabecalho-menu">
          <a className="cabecalho-menu-item" href="#sessao0">home</a>
          <a className="cabecalho-menu-item" href="#sessao1">sobre</a>
          <a className="cabecalho-menu-item" href="#sessao2">projetos</a>
          <a className="cabecalho-menu-item" href="#sessao3">serviços</a>
          <a className="cabecalho-menu-item" href="#sessao4">resumo</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
