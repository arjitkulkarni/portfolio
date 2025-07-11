import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Leadership from './pages/Leadership';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Skills />
        <Education />
        <Leadership />
        <Projects />
        <Contact />
        {/* Add Skills, Education, Leadership, Projects, Contact sections here */}
      </main>
    </div>
  );
}

export default App;
