import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import data from '../data/experience.json';

const WorkBoxDesktop = () => {
  const { languageSelected } = useSelector((state) => state.language);

  const base = data[languageSelected];

  const [jobSelected, setJobSelected] = useState(base.workList[0]);
  const [jobData, setJobData] = useState(base.workDescription[jobSelected]);

  useEffect(() => {
    setJobData(base.workDescription[jobSelected]);
  }, [jobSelected]);

  useEffect(() => {
    setJobData(base.workDescription[jobSelected]);
  }, [languageSelected]);

  const handleJobSelected = (e) => {
    e.preventDefault();
    setJobSelected(e.target.value);
  };

  return (
    <div className='work-box-desktop row'>
      <div className='work-tab-list col-4'>
        {base.workList.map((job, index) => {
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
        <h4>
          {jobData.role} - {jobData.company}
        </h4>
        <h6>{jobData.time}</h6>
        <ul>
          {jobData.description.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkBoxDesktop;
