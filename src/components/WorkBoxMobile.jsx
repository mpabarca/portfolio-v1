import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { History, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../data/experience.json';

const WorkBoxMobile = () => {
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

  return (
    <div className='work-box-mobile'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={true}
        history={{
          key: 'slide',
        }}
        modules={[Navigation, Pagination, History]}
        className='mySwiper'
      >
        {base.workList.map((job, index) => {
          return (
            <SwiperSlide data-history={job} key={index}>
              <div className='card'>
                <div className='card-body'>
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WorkBoxMobile;
