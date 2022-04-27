import React from 'react';
import { useSelector } from 'react-redux';
import data from '../data/experience.json';
import WorkBoxDesktop from './WorkBoxDesktop';
import WorkBoxMobile from './WorkBoxMobile';

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
