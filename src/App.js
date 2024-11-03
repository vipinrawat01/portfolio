// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Education from './components/Timeline'; // Ensure this component exists
import Skills from './components/Skills'; // Ensure this component exists
import Projects from './components/Projects'; // Ensure this component exists
import Contact from './components/Contacts'; // Ensure this component exists
import ResumePage from './components/ResumePage'; // Ensure this component exists
import Certificates from './components/Certificates'; // Ensure this component exists

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <AboutMe />
              <Education />
              <Skills />
              <Projects />
              <Certificates />
              <Contact />
            </>
          } />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
