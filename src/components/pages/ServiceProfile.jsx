import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import worker from '../assets/images/worker.jpg';


function ServiceProfile() {
    const rating = 4
    const remain = 5 - rating
  return (
    <div className="lg:w-[371px] lg:h-[495px] w-[150px] h-[150px] pt-4 p-[30px] mt-[120px] pl-2 bg-white shadow flex-col justify-start items-start lg:gap-[57px] gap-[10px] inline-flex">
    <div className="justify-start items-center lg:gap-[17px] gap-[2px] inline-flex">
        <img className="lg:size-[50px] size-[15px] object-cover rounded-full" src={worker} />
        <div className="text-center text-stone-950 lg:text-xl text-xs font-medium font-Ubuntu">Alexander Elijah</div>
    </div>
    <div className="flex-col justify-start items-start lg:gap-9 flex w-[150px] h-[90px]">
        <div className="justify-start items-end lg:gap-2.5 gap-1 inline-flex">
            <div className="text-center text-stone-950 lg:text-2xl text-xxs font-normal font-Ubuntu">Ratings:</div>
            <div className="justify-start items-center gap-1 flex">
                <div className="justify-start items-start flex">
                    {Array(rating).fill().map((_, index) => (
                        <FaStar key={index} className="lg:size-[30px] size-[8px]  relative text-do_green" />
                        ))}
                    {
                        Array(remain).fill().map((_, index) => 
                        <FaRegStar key={index} className="lg:size-[30px] size-[8px] relative text-do_green" />
                        )}
                </div>
                <div className="text-center text-neutral-600 lg:text-2xl text-xxs font-normal font-Ubuntu">(11)</div>
            </div>
        </div>
        <div className="text-center"><span className="text-stone-950 lg:text-2xl text-xxs font-normal font-Ubuntu">Orders: </span><span className="text-stone-950 lg:text-2xl text-xxs font-light font-Ubuntu">33</span></div>
        <div className="text-center"><span className="text-stone-950 lg:text-2xl text-xxs font-normal font-Ubuntu">From: </span><span className="text-stone-950 lg:text-2xl text-xxs font-light font-Ubuntu">Casablanca</span></div>
        <div className="text-left flex gap-[1px]"><span className="text-stone-950 lg:text-2xl text-xxs font-normal font-Ubuntu">Phone Number: </span><span className="text-stone-950 lg:text-2xl text-xxs font-light font-Ubuntu">0611214110</span></div>
        <div className="text-center"><span className="text-stone-950 lg:text-2xl text-xxs font-normal font-Ubuntu">Service Price: </span><span className="text-stone-950 lg:text-2xl text-xxs font-light font-Ubuntu">500DH</span></div>
    </div>
</div>
  )
}

export default ServiceProfile