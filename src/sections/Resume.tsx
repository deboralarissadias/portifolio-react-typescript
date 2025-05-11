import React from 'react';
import '../assets/styles/sections/Resume.css';
import aspas from '../assets/images/aspas.png';

const Resume: React.FC = () => {
  return (
    <section className="conteudo-sessao4" id="sessao4">
      <div className="conteudo-sessao4-escrito">
        <h1 className="conteudo-sessao4-escrito-titulo">Experiência Profissional</h1>
        <h2 className="conteudo-sessao4-escrito-subtitulo">Este é apenas o começo, sempre aprendendo!</h2>
      </div>    
      <div className="imagens-cargos">
        <div className="conteudo-sessao4-cargo1">
          <h3 className="titulo1">Cargo</h3>
          <p className="texto1">SABERES - Professora de Matemática / Fev 2015 - Abr 2016</p>
        </div>
        <div className="conteudo-sessao4-cargo2">
          <h3 className="titulo2">Cargo</h3>
          <p className="texto1">BRIDGE SCHOOL - Professora de Matemática / Jul 2016 - Jan 2023</p>
        </div>
        <div className="conteudo-sessao4-cargo3">
          <h3 className="titulo3">Cargo</h3>
          <p className="texto1">BLOG FONTE DO SABER - Desenvolvedora Front-end/ Jan 2023 - Dez 2023</p>
        </div>
        <div className="conteudo-sessao4-cargo4">
          <h3 className="titulo4">Cargo</h3>
          <p className="texto1">COMPASS UOL - Estagiária Full Stack Development (React.js + Node.js) for Commerce on AWS/ Jun 2024 - Nov 2024</p>
        </div>
        <div className="conteudo-sessao4-cargo5">
          <h3 className="titulo5">Cargo</h3>
          <p className="texto1">COMPASS UOL - Programadora Trainee / Atual</p>
        </div>
      </div>

      <div className="conteudo-sessao4-escrito2">
        <img className="conteudo-sessao4-aspas" src={aspas} alt="imagem das aspas"/>
        <p className="conteudo-sessao4-texto">"O saber a gente aprende com os mestres e os livros. A sabedoria se aprende é com a vida e com os humildes."</p>
        <p className="conteudo-sessao4-texto2">~Cora Coralina</p>
      </div>
    
    </section>
  );
}

export default Resume;
