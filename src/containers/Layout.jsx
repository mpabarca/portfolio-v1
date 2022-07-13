import React from 'react';
import Sidebar from '../components/Sidebar';
import SocialMedias from '../components/SocialMedias';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
//import FeaturesHeader from './FeaturesHeader';
import Hero from './Hero';

function Layout() {
  return (
    <div className='layout'>
      <Sidebar />
      <div className='main'>
        {/*<FeaturesHeader />*/}
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
