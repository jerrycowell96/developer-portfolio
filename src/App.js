import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Qualifications from './components/qualifications/Qualifications';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Work from './components/Work/Work';


function App() {
  return (
   <>
    <Header />
    <main className='main'>
      <Home /> 
      <About />
      <Skills />
      <Services />
      <Qualifications />
      <Work />
      <Testimonials />
      <Contact />
    </main>
   </> 
  )
}

export default App;
