import React, { useEffect, useState } from 'react';

const WorkBoxDesktop = ({ base }) => {
  const [data, setData] = useState(base);
  const [jobSelected, setJobSelected] = useState(data.workList[0]);
  const [jobData, setJobData] = useState(data.workDescription[jobSelected]);

  useEffect(() => {
    setData(data);
  }, [base]);

  useEffect(() => {
    setJobData(data.workDescription[jobSelected]);
  }, [jobSelected]);

  useEffect(() => {
    console.log('change');
    console.log(base);
  }, [jobData]);

  const handleJobSelected = (e) => {
    e.preventDefault();
    setJobSelected(e.target.value);
  };
  return (
    <div className='work-box-desktop row'>
      <div className='work-tab-list col-4'>
        {data.workList.map((job, index) => {
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
          {jobData.description.map((job, index) => {
            return <li key={index}>{job}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default WorkBoxDesktop;
