import React from 'react';
import '../assets/styles/Portfolio.css';

const Portfolio: React.FC = () => {
  return (
    <section className="conteudo-sessao2" id="sessao2">
      <div className="conteudo-sessao2-escrito">
        <h1 className="conteudo-sessao2-escrito-titulo">Meu Portfólio</h1>
        <h2 className="conteudo-sessao2-escrito-subtitulo">Estes são alguns dos trabalhos e  projetos que já realizei</h2>
        

        <div className="gallery-container">
     <a href="https://codepen.io/deboralarissadias/pen/MWGKgya" className="gallery-items">
      <img src="./images/rectangle2.jpg" alt="Imagem do trabalho1"/>
     </a>

     <a href="https://codepen.io/deboralarissadias/pen/GRBOZMN" className="gallery-items">
      <img src="./images/rectangle3.jpg" alt="Imagem do trabalho2"/>
     </a>

     <a href="https://codepen.io/deboralarissadias/pen/abGOjNX" className="gallery-items">
      <img src="./images/rectangle4.jpg" alt="Imagem do trabalho3"/>
     </a>

     <a href="https://codepen.io/deboralarissadias/pen/PoezEbZ" className="gallery-items">
      <img src="./images/rectangle5.jpg" alt="Imagem do trabalho4"/>
     </a>

     <a href="https://codepen.io/deboralarissadias/pen/gOzPodX" className="gallery-items">
      <img src="./images/rectangle6.jpg" alt="Imagem do trabalho5"/>
     </a>

     <a href="https://otaviorafael.com.br/blogfontedosaber" className="gallery-items">
      <img src="./images/rectangle7.jpg" alt="Imagem do trabalho6"/>
     </a>

      </div>
      </div>
    </section>
  );
}

export default Portfolio;
