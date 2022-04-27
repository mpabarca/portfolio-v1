import React, { useEffect, useState } from 'react';
import data from '../data/sidebar.json';

function Sidebar({ language }) {
  const [base, setBase] = useState(data[language]);

  useEffect(() => {
    setBase(data[language]);
  }, [language]);

  return (
    <nav className='sidebar'>
      <a href='#'>{base.home}</a>
      <a href='#about'>{base.about}</a>
      <a href='#experience'>{base.experience}</a>
      <a href='#contact'>{base.contact}</a>
    </nav>
  );
}

export default Sidebar;
