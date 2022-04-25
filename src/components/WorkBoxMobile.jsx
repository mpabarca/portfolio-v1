import Flicking from '@egjs/react-flicking';
import React from 'react';

const WorkBoxMobile = () => {
  return (
    <div className='work-box-mobile'>
      WorkBoxMobile
      <div>
        <Flicking moveType='freeScroll' bound={true}>
          <span className='button mr-2 is-white'>🍎 Apple</span>
          <span className='button mr-2 is-white'>🍉 Watermelon</span>
          <span className='button mr-2 is-white'>🥝 Kiwi</span>
          <span className='button mr-2 is-white'>...</span>
        </Flicking>
        ;
      </div>
    </div>
  );
};

export default WorkBoxMobile;
