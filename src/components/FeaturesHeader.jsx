import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function FeaturesHeader({ setLanguage }) {
  const handleOnClick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
  };
  return (
    <nav className='features'>
      <button type='button' value='spanish' onClick={(e) => handleOnClick(e)}>
        ES
      </button>
      <button type='button' value='english' onClick={(e) => handleOnClick(e)}>
        EN
      </button>
      <button type='button'>
        <FontAwesomeIcon icon={faCircleHalfStroke} />
      </button>
    </nav>
  );
}

export default FeaturesHeader;
