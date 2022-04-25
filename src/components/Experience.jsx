import React from 'react';
import WorkBoxDesktop from './WorkBoxDesktop';
import WorkBoxMobile from './WorkBoxMobile';

const Experience = () => {
  return (
    <div id='experience' className='container'>
      <h1>Experience</h1>
      <WorkBoxDesktop />
      <WorkBoxMobile />
    </div>
  );
};

export default Experience;
