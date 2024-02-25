import { Search } from 'lucide-react'
import React from 'react'
import SearchCategorie from '../areas/SearchCategorie'
import { RiCameraLensFill } from "react-icons/ri";
import { FaHammer } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaCookieBite } from "react-icons/fa";
import { FaPaintRoller } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";
import { FaPencilRuler } from "react-icons/fa";


function Homepage() {
    const categories = [
        { name: 'Photographer', icon: <RiCameraLensFill className='md:size-[75px] size-[30px]' /> },
        { name: 'builder', icon: <FaHammer className='md:size-[75px] size-[30px]' /> },
        { name: 'Electrician', icon: <BsFillLightningChargeFill className='md:size-[75px] size-[30px]' /> },
        { name: 'Baker', icon: <FaCookieBite className='md:size-[75px] size-[30px]' /> },
        { name: 'Painter', icon: <FaPaintRoller className='md:size-[75px] size-[30px]' /> },
        { name: 'Barber', icon: <FaScissors className='md:size-[75px] size-[30px]' /> },
        { name: 'Designer', icon: <FaPencilRuler className='md:size-[75px] size-[30px]' /> },

    ]
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='md:w-full relative bg-neutral-100 z-[-1]'>
                <div className="md:size-[314px] size-[140px] circle-design buttom-10 md:mt-[-70px] mt-[-50px] md:ml-[-111px] ml-[-200px] z-[-1]" />
                <div className='flex w-full items-center justify-center flex-col md:h-[45vh] h-[30vh] z-[-1]'>
                    <div className="md:size-[238px] size-[95px]  circle-design md:right-[-140px] right-[-200px]" />
                    <div className="md:size-[320px] size-[150px] circle-design md:top-[122px] top-[60px] md:right-[-140px] right-[-200px]" />
                    <span className="text-neutral-800 lg:text-5xl md:text-3xl text-xl md:w-[40%] w-auto text-center md:mt-[60px] py-9 font-ubuntu">Find The Right Tasker</span>
                </div>
            </div>
            <SearchCategorie />
            <div className="inline-flex items-center justify-center md:gap-10 gap-2 mt-[75px] relative">
                {categories.map((e) =>
                    <div className="inline-flex flex-col mt-9 items-center w-[65px] md:gap-[16px] gap-[10] relative">
                        <div>{e.icon}</div>
                        <div className="w-fit font-ubuntu font-normal md:text-lg text-xs">
                            {e.name}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Homepage