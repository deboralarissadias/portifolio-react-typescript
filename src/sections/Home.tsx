import React from 'react';
import '../assets/styles/sections/Home.css';
import perfilImg from '../assets/images/perfil.jpg';
import gitIcon from '../assets/images/Git.svg';
import linkedinIcon from '../assets/images/Linkedin.svg';

const Home: React.FC = () => {
  return (
    <section className="conteudo-sessao0" id="sessao0">

      <div className='conteudo-sessao0-container'>
        <div className="conteudo-sessao0-escrito">
          <h1 className="conteudo-sessao0-escrito-titulo">Olá,</h1>
          <h2 className="conteudo-sessao0-escrito-subtitulo">Eu sou Débora Larissa Desenvolvedora Front-end</h2>
          <h3 className="conteudo-sessao0-escrito-subtitulo-continuaçao">Seja bem-vindo ao meu portfólio</h3>
          <button className="conteudo-sessao0-escrito-botao" onClick={() => window.location.href = 'https://www.linkedin.com/in/debora-larissa/'}>Saiba mais sobre mim</button>
          <div className="redes-sociais">
            <a href="https://github.com/deboralarissadias">
              <img className="conteudo-sessao0-git" src={gitIcon} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/debora-larissa">
              <img className="conteudo-sessao0-linkedin" src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <img className="conteudo-sessao0-imagem" src={perfilImg} alt="Débora Larissa" />

      </div>
    </section>
  );
}

export default Home;
