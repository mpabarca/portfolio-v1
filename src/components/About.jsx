import React, { useEffect, useState } from 'react';
import data from '../data/about.json';

function About({ language }) {
  const [base, setBase] = useState(data[language]);

  useEffect(() => {
    setBase(data[language]);
  }, [language]);

  return (
    <div id='about' className='container'>
      <h1>{base.pageName}</h1>
      <span>{base.description}</span>
    </div>
  );
}

export default About;
