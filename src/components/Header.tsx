import React from 'react';
import '../assets/styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="cabecalho">
      <a className="cabecalho-principal">Débora Larissa</a>
      <div className="cabecalho-menu-mobile">&#9776;</div>
      <nav className="cabecalho-menu">
        <a className="cabecalho-menu-item" href="#sessao0">home</a>
        <a className="cabecalho-menu-item" href="#sessao1">sobre</a>
        <a className="cabecalho-menu-item" href="#sessao2">portfólio</a>
        <a className="cabecalho-menu-item" href="#sessao3">serviços</a>
        <a className="cabecalho-menu-item" href="#sessao4">resumo</a>
      </nav>
    </header>
  );
}

export default Header;
