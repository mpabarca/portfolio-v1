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
    <div className='col-xxl-8 container px-4 py-5'>
      <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
        <div className='col-10 col-sm-8 col-lg-6'>
          <img
            src='https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            className='d-block mx-lg-auto img-fluid'
            alt='Bootstrap Themes'
            width='700'
            height='500'
            loading='lazy'
          />
        </div>
        <div className='col-lg-6'>
          <h1 className='display-5 fw-bold lh-1 mb-3'>Maria Paz Abarca</h1>
          <p className='lead'>{base.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
