import React from 'react';
import { useSelector } from 'react-redux';
import WorkBoxDesktop from '../components/WorkBoxDesktop';
import WorkBoxMobile from '../components/WorkBoxMobile';
import data from '../data/experience.json';

function Experience() {
  const { languageSelected } = useSelector((state) => state.language);
  const base = data[languageSelected];

  return (
    <div id='experience' className='container'>
      <h1>{base.pageName}</h1>
      <WorkBoxDesktop />
      <WorkBoxMobile />
    </div>
  );
}

export default Experience;
