import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  let component
  switch (window.location.pathname) {
    case '/':
      component = <About/>
      break
    case '/portfolio':
      component = <Projects/>
      break
    case '/resume':
      component = <Resume/>
      break
    case '/contact':
      component = <Contact/>
      break
  }

  return (
    <div className='container'>
      <main>
        <Nav></Nav>
        {component}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;


// 


// 