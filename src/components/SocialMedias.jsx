import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import data from '../data/link.json';

function SocialMedias() {
  return (
    <nav className='social-medias'>
      <a target='_blank' href={data.instagram} rel='noreferrer'>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a target='_blank' href={data.linkedIn} rel='noreferrer'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a target='_blank' href={data.github} rel='noreferrer'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a target='_blank' href={`mailto:${data.email}`} rel='noreferrer'>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </nav>
  );
}

export default SocialMedias;
