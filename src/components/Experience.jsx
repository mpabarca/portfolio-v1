import React, { useEffect, useState } from 'react';
import data from '../data/experience.json';
import WorkBoxDesktop from './WorkBoxDesktop';
import WorkBoxMobile from './WorkBoxMobile';

function Experience({ language }) {
  const [base, setBase] = useState(data[language]);

  useEffect(() => {
    setBase(data[language]);
  }, [language]);

  return (
    <div id='experience' className='container'>
      <h1>{base.pageName}</h1>
      <WorkBoxDesktop base={base} />
      <WorkBoxMobile base={base} />
    </div>
  );
}

export default Experience;
