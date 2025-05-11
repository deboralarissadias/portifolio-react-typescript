import React from 'react';
import '../assets/styles/sections/About.css';
import SoftSkillsSection from '../components/Soft-skills-section';

const About: React.FC = () => {
  return (
    <section className="conteudo-sessao1" id="sessao1">
      <div className="conteudo-sessao1-escrito">
        <h1 className="conteudo-sessao1-escrito-titulo"><span className="parte1">Débora </span>Larissa</h1>
        <h2 className="conteudo-sessao1-escrito-subtitulo">Sou uma desenvolvedora apaixonada por criar interfaces modernas e funcionais, unindo criatividade e tecnologia para proporcionar experiências digitais únicas. Com uma trajetória inicial na sala de aula como professora de Matemática, trago comigo um olhar lógico e analítico, que aplico na transformação de ideias em projetos visuais impactantes e eficientes. Estou em constante busca por aprendizado e crescimento, sempre motivada por novos desafios.</h2>
        
        <SoftSkillsSection />
      </div>
    </section>
  );
}

export default About;
