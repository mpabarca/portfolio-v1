import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import data from '../data/contact.json';
import ContactForm from './ContactForm';

function Contact() {
  const { languageSelected } = useSelector((state) => state.language);
  const [base, setBase] = useState(data[languageSelected]);

  useEffect(() => {
    setBase(data[languageSelected]);
  }, [languageSelected]);

  return (
    <div id='contact' className='container'>
      <h1>{base.pageName}</h1>
      <ContactForm base={base} />
    </div>
  );
}

export default Contact;
