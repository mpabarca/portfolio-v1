import React from 'react';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Hero from './Hero';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div className='layout'>
      <Sidebar />
      <div className='main'>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default Layout;
