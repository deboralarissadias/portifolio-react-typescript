import React from 'react';
import '../assets/styles/About.css';

const About: React.FC = () => {
  return (
    <section className="conteudo-sessao1" id="sessao1">
      <div className="conteudo-sessao1-escrito">
        <h1 className="conteudo-sessao1-escrito-titulo"><span className="parte1">Débora </span>Larissa</h1>
        <h2 className="conteudo-sessao1-escrito-subtitulo">Meu nome é Débora Larissa👋 Eu sou brasileira, pernambucana. Cursando, 3º período, Análise e Desenvolvimento de Sistemas.</h2>
        <h3 className="conteudo-sessao1-escrito-subtitulo-continuaçao"><span className="escrito1">Hard </span>Skills</h3>
        <div className="skills-container">
          <div className="skills"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
