import React, { useState } from 'react'
import SliderImages from './SliderImages';
import ServiceProfile from './ServiceProfile';

function ServiceDetails() {
  return (
    <div className='w-full flex lg:flex-row flex-col items-start relative bg-neutral-100 lg:m-[100px] md:m-[60px] lg:gap-[50px] gap-[2px] m-[20px]'>
       <SliderImages />
        <ServiceProfile/>
    </div>
  )
}

export default ServiceDetails