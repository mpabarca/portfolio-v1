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

  const [jobData, setJobData] = useState(
    Object.values(data[languageSelected].workDescription),
  );

  useEffect(() => {
    setJobData(Object.values(data[languageSelected].workDescription));
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
        {jobData.map((job, index) => {
          return (
            <SwiperSlide data-history={job.company} key={index}>
              <div className='card'>
                <div className='card-body'>
                  <h4>
                    {job.role} - {job.company}
                  </h4>
                  <h6>{job.time}</h6>
                  <ul>
                    {job.description.map((description, index) => (
                      <li key={index}>{description}</li>
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
