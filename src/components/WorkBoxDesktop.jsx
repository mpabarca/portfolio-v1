import React, { useState } from 'react';

const workList = ['Ecomsur', 'Toctoc', 'Enara Health', 'Globant'];
const workDescription = [
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
];

const WorkBoxDesktop = () => {
  const [jobSelected, setJobSelected] = useState('');

  const handleJobSelected = (e) => {
    e.preventDefault();
    setJobSelected(e.target.value);
  };
  return (
    <div className='work-box-desktop row'>
      <div className='work-tab-list col-4'>
        {workList.map((job, index) => {
          return (
            <button
              type='button'
              key={index}
              value={job}
              onClick={(e) => handleJobSelected(e)}
            >
              {job}
            </button>
          );
        })}
      </div>
      <div className='work-tab-panel col-8'>
        <h4>Web UI Developer - {jobSelected}</h4>
        <h6>July - December 2020</h6>
        <ul>
          {workDescription.map((description, index) => {
            return <li key={index}>{description}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default WorkBoxDesktop;
