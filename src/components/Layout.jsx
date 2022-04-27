import React, { useState } from 'react';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import FeaturesHeader from './FeaturesHeader';
import Hero from './Hero';
import Sidebar from './Sidebar';
import SocialMedias from './SocialMedias';

function Layout() {
  const [language, setLanguage] = useState('english');
  return (
    <div className='layout'>
      <Sidebar language={language} />
      <div className='main'>
        <FeaturesHeader setLanguage={setLanguage} />
        <div className='content'>
          <Hero language={language} />
          <About language={language} />
          <Experience language={language} />
          <Contact language={language} />
        </div>
        <SocialMedias />
      </div>
    </div>
  );
}

export default Layout;
