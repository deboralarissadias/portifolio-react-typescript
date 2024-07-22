import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="conteudo">
        <Home />
        <About />
        <Portfolio />
        <Services />
        <Resume />
      </main>
    </div>
  );
}

export default App;
