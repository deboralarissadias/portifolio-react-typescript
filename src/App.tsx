import React from 'react';
import Header from './sections/Header';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Resume from './sections/Resume';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="conteudo">
        <Home />
        <About />
        <Projects />
        {/* <Services /> */}
        {/* <Resume /> */}
      </main>
    </div>
  );
}

export default App;
