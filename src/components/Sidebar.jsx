import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import data from '../data/sidebar.json';

function Sidebar() {
  const { languageSelected } = useSelector((state) => state.language);
  const [base, setBase] = useState(data[languageSelected]);

  useEffect(() => {
    setBase(data[languageSelected]);
  }, [languageSelected]);

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
