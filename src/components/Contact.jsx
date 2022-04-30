import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import dataContact from '../data/contact.json';
import dataLink from '../data/link.json';
import ContactForm from './ContactForm';

function Contact() {
  const { languageSelected } = useSelector((state) => state.language);
  const [base, setBase] = useState(dataContact[languageSelected]);
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyToClipboard = (e) => {
    e.preventDefault();
    copyTextToClipboard(dataLink.email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setBase(dataContact[languageSelected]);
  }, [languageSelected]);

  return (
    <div id='contact' className='container'>
      <h1>{base.pageName}</h1>
      <ContactForm base={base} />
      <div>
        <button type='button' onClick={(e) => handleCopyToClipboard(e)}>
          Copy mail
        </button>
        <span>{isCopied ? 'Copied!' : 'Copy'}</span>
      </div>
    </div>
  );
}

export default Contact;
