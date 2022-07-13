import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import data from '../data/about.json';

function About() {
  const { languageSelected } = useSelector((state) => state.language);
  const [base, setBase] = useState(data[languageSelected]);

  useEffect(() => {
    setBase(data[languageSelected]);
  }, [languageSelected]);

  return (
    <div id='about' className='container'>
      <h1>{base.pageName}</h1>
      <span>{base.description}</span>
    </div>
  );
}

export default About;
