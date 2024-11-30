import React from 'react';
import '../assets/styles/sections/Projects.css';
import trabalho1 from '../assets/images/rectangle2.jpg';
import trabalho2 from '../assets/images/rectangle3.jpg';
import trabalho3 from '../assets/images/rectangle4.jpg';
import trabalho4 from '../assets/images/rectangle5.jpg';
import trabalho5 from '../assets/images/rectangle6.jpg';
import trabalho6 from '../assets/images/rectangle7.png';
import trabalho7 from '../assets/images/rectangle8.png';
import trabalho8 from '../assets/images/rectangle9.png';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "Conversor de moedas",
    description: "O Conversor de Moedas é uma aplicação web simples e interativa desenvolvida com HTML, CSS, e JavaScript.",
    image: trabalho1,
    link: "https://codepen.io/deboralarissadias/pen/MWGKgya",
  },
  {
    title: "Super Trunfo",
    description: "O Super Trunfo é uma recriação digital do clássico jogo de cartas, desenvolvido com HTML, CSS, e JavaScript. ",
    image: trabalho2,
    link: "https://codepen.io/deboralarissadias/pen/GRBOZMN",
  },
  {
    title: "Calculadora de média",
    description: "A Calculadora de Média é uma aplicação web simples desenvolvida com HTML, CSS, e JavaScript, projetada para facilitar o cálculo de médias de notas ou valores informados pelo usuário.",
    image: trabalho3,
    link: "https://codepen.io/deboralarissadias/pen/abGOjNX",
  },
  {
    title: "Aluraflix",
    description: "O Aluraflix é uma aplicação web inspirada em plataformas de streaming, desenvolvida com HTML, CSS, e JavaScript, que permite criar uma galeria personalizada de vídeos ou filmes favoritos.",
    image: trabalho4,
    link: "https://codepen.io/deboralarissadias/pen/PoezEbZ",
  },
  {
    title: "Mentalista",
    description: "O Mentalista é uma recriação digital do jogo de adivinhação, desenvolvido com HTML, CSS, e JavaScript.",
    image: trabalho5,
    link: "https://codepen.io/deboralarissadias/pen/gOzPodX",
  },
  {
    title: "Blog Fonte do Saber",
    description: "O Blog Fonte do Saber é uma plataforma dedicada a compartilhar conhecimento sobre diversos temas, com foco em educação, tecnologia, cultura e desenvolvimento pessoal. ",
    image: trabalho6,
    link: "https://otaviorafael.com.br/blogfontedosaber",
  },
  {
    title: "Shop Co",
    description: "O site é uma página simples de uma loja de roupas, desenvolvido com HTML, CSS, e JavaScript. ",
    image: trabalho7,
    link: "https://deboralarissadias.github.io/compass-store/",
  },
  {
    title: "Furniro",
    description: "O site é uma loja de móveis e decoração, desenvolvido com React, TypeScript, Node.js, NestJS, CSS3 e PostgreSQL.",
    image: trabalho8,
    link: "https://github.com/deboralarissadias/furniro",
  },

];


const Projects: React.FC = () => {
  return (
    <section className="conteudo-sessao2" id="sessao2">
      <div className="conteudo-sessao2-escrito">
        <h1 className="conteudo-sessao2-escrito-titulo">Meus Projetos</h1>
        <h2 className="conteudo-sessao2-escrito-subtitulo">Estes são alguns dos trabalhos e  projetos que já realizei</h2>
        

        <div className="gallery-container">
     {/* <a href="https://codepen.io/deboralarissadias/pen/MWGKgya" className="gallery-items">
      <img src={trabalho1} alt="Imagem do trabalho1"/>
     </a>

     <a href="https://codepen.io/deboralarissadias/pen/GRBOZMN" className="gallery-items">
      <img src={trabalho2} alt="Imagem do trabalho2"/>
     </a>

     <a href="https://codepen.io/deboralarissadias/pen/abGOjNX" className="gallery-items">
      <img src={trabalho3} alt="Imagem do trabalho3"/>
     </a>

     <a href="https://codepen.io/deboralarissadias/pen/PoezEbZ" className="gallery-items">
      <img src={trabalho4} alt="Imagem do trabalho4"/>
     </a>

     <a href="https://codepen.io/deboralarissadias/pen/gOzPodX" className="gallery-items">
      <img src={trabalho5} alt="Imagem do trabalho5"/>
     </a>

     <a href="https://otaviorafael.com.br/blogfontedosaber" className="gallery-items">
      <img src={trabalho6} alt="Imagem do trabalho6"/>
     </a> */}

      <ProjectCard projects={projects} />
      </div>
      </div>


    </section>
  );
}

export default Projects;
