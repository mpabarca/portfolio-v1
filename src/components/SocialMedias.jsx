import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function SocialMedias() {
  return (
    <nav className='social-medias'>
      <a href='/'>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href='/'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href='/'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href='/'>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </nav>
  );
}

export default SocialMedias;
