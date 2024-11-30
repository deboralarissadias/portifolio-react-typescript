import React from 'react';
import '../assets/styles/sections/About.css';

const About: React.FC = () => {
  return (
    <section className="conteudo-sessao1" id="sessao1">
      <div className="conteudo-sessao1-escrito">
        <h1 className="conteudo-sessao1-escrito-titulo"><span className="parte1">Débora </span>Larissa</h1>
        <h2 className="conteudo-sessao1-escrito-subtitulo">Meu nome é Débora Larissa👋 Eu sou brasileira, pernambucana. Cursando, 5º período, Análise e Desenvolvimento de Sistemas.</h2>
        <h3 className="conteudo-sessao1-escrito-subtitulo-continuaçao">Soft Skills</h3>
        <div className="skills-container">
          <div className="soft-skills0">
          <p className="texto-skills">Empatia</p>
          </div>
          <div className="soft-skills1">
          <p className="texto-skills">Trabalho em equipe</p>
          </div>
          <div className="soft-skills2">
          <p className="texto-skills">Ética</p>
          </div>
          <div className="soft-skills3">
          <p className="texto-skills">Liderança</p>
          </div>
          <div className="soft-skills4">
          <p className="texto-skills">Resolução de problemas</p>
          </div>
          <div className="soft-skills5">
          <p className="texto-skills">Comunicação</p>
          </div>
          <div className="soft-skills6">
          <p className="texto-skills">Proatividade</p>
          </div>
          <div className="soft-skills7">
          <p className="texto-skills">Resiliência</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
