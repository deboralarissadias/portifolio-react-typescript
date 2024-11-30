import React from 'react';
import '../assets/styles/Services.css';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import figma from '../assets/images/figma.png';
import git from '../assets/images/git.png';
import jira from '../assets/images/jira.png';
import js from '../assets/images/js.png';
import python from '../assets/images/python.png';
import typescript from '../assets/images/typescript.png';
import react from '../assets/images/react.png';
import node from '../assets/images/node.png';

const Services: React.FC = () => {
  return (
    <section className="conteudo-sessao3" id="sessao3">
      <div className="conteudo-sessao3-escrito">
        <h1 className="conteudo-sessao3-escrito-titulo">Minhas Techs</h1>
        <h2 className="conteudo-sessao3-escrito-subtitulo">Tecnologias</h2>
        <h3 className="conteudo-sessao3-escrito-subtitulo-continuaçao">Atualmente desenvolvendo</h3>
        <div className="tecnologias-utilizadas">
          <img className="conteudo-sessao3-html" src={html} alt="imagem do html" />
          <img className="conteudo-sessao3-css" src={css} alt="imagem do css" />
          <img className="conteudo-sessao3-figma" src={figma} alt="imagem do figma" />
          <img className="conteudo-sessao3-git" src={git} alt="imagem do git" />
          <img className="conteudo-sessao3-jira" src={jira} alt="imagem do jira" />
          <img className="conteudo-sessao3-js" src={js} alt="imagem do js" />
          <img className="conteudo-sessao3-python" src={python} alt="imagem do python" />
          <img className="conteudo-sessao3-typescript" src={typescript} alt="imagem do typescript" />
          <img className="conteudo-sessao3-react" src={react} alt="imagem do react" />
          <img className="conteudo-sessao3-node" src={node} alt="imagem do node" />

        </div>
      </div>
    </section>
  );
}
  
  
 
  /*
  return (
    <section className="conteudo-sessao3" id="sessao3">
      <h1>Minhas Techs</h1>
      <div className="services-content">
        
      </div>
    </section>
  );
  */
  


export default Services;
