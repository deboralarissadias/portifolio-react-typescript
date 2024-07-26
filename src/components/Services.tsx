import React from 'react';
import '../assets/styles/Services.css';

const Services: React.FC = () => {
  return (
    <section className="conteudo-sessao3" id="sessao3">
      <div className="conteudo-sessao3-escrito">
        <h1 className="conteudo-sessao3-escrito-titulo">Minhas Techs</h1>
        <h2 className="conteudo-sessao3-escrito-subtitulo">Tecnologias</h2>
        <h3 className="conteudo-sessao3-escrito-subtitulo-continuaçao">Atualmente desenvolvendo</h3>
        <div className="tecnologias-utilizadas">
          <img className="conteudo-sessao3-html" src="./icones/html.png" alt="imagem do html" />
          <img className="conteudo-sessao3-css" src="./icones/css.png" alt="imagem do css" />
          <img className="conteudo-sessao3-figma" src="./icones/figma.png" alt="imagem do figma" />
          <img className="conteudo-sessao3-git" src="./icones/git.png" alt="imagem do git" />
          <img className="conteudo-sessao3-jira" src="./icones/jira.png" alt="imagem do jira" />
          <img className="conteudo-sessao3-js" src="./icones/js.png" alt="imagem do js" />
          <img className="conteudo-sessao3-python" src="./icones/python.png" alt="imagem do python" />
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
