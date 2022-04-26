import React from 'react';
import { History, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const workList = ['Ecomsur', 'Toctoc', 'Enara Health', 'Globant'];
const workDescription = [
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
];

const WorkBoxMobile = () => {
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
        {workList.map((job, index) => {
          return (
            <SwiperSlide data-history={index} key={index}>
              <div className='card'>
                <div className='card-body'>
                  <h4>Web UI Developer - {job}</h4>
                  <ul>
                    {workDescription.map((description, index) => {
                      return <li key={index}>{description}</li>;
                    })}
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
