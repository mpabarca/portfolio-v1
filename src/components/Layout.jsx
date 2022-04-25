import React from 'react';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import FeaturesHeader from './FeaturesHeader';
import Hero from './Hero';
import Sidebar from './Sidebar';
import SocialMedias from './SocialMedias';

function Layout() {
  return (
    <div className='layout'>
      <Sidebar />
      <div className='main'>
        <FeaturesHeader />
        <div className='content'>
          <Hero />
          <About />
          <Experience />
          <Contact />
        </div>
        <SocialMedias />
      </div>
    </div>
  );
}

export default Layout;
