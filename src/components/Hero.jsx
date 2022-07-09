import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import data from '../data/home.json';

function Hero() {
  const { languageSelected } = useSelector((state) => state.language);
  const [base, setBase] = useState(data[languageSelected]);

  useEffect(() => {
    setBase(data[languageSelected]);
  }, [languageSelected]);

  return (
    <div id='hero' className='col-xxl-8 container px-4'>
      <h1 className='display-5 fw-bold lh-1 mb-3'>Maria Paz Abarca</h1>
      <h3 className='lead'>{base.description}</h3>
    </div>
  );
}

export default Hero;
