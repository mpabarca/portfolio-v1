import React, { useEffect, useState } from 'react';
import data from '../data/contact.json';
import ContactForm from './ContactForm';

function Contact({ language }) {
  const [base, setBase] = useState(data[language]);

  useEffect(() => {
    setBase(data[language]);
  }, [language]);

  return (
    <div id='contact' className='container'>
      <h1>{base.pageName}</h1>
      <ContactForm base={base} />
    </div>
  );
}

export default Contact;
