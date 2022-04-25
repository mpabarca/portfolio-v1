import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function FeaturesHeader() {
  return (
    <nav className='features'>
      <a href='/'>ES</a>
      <a href='/'>EN</a>
      <a href='/'>
        <FontAwesomeIcon icon={faCircleHalfStroke} />
      </a>
    </nav>
  );
}

export default FeaturesHeader;
