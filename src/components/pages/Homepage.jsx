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
        { name: 'Photographer', icon: <RiCameraLensFill className='categorie-icons' /> },
        { name: 'builder', icon: <FaHammer className='categorie-icons' /> },
        { name: 'Electrician', icon: <BsFillLightningChargeFill className='categorie-icons' /> },
        { name: 'Baker', icon: <FaCookieBite className='categorie-icons' /> },
        { name: 'Painter', icon: <FaPaintRoller className='categorie-icons' /> },
        { name: 'Barber', icon: <FaScissors className='categorie-icons' /> },
        { name: 'Designer', icon: <FaPencilRuler className='categorie-icons' /> },

    ]
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='md:w-full relative bg-neutral-100 z-[-1]'>
                <div className="md:size-[314px] size-[140px] circle-design buttom-10 md:mt-[-70px] mt-[-50px] md:ml-[-111px] ml-[-200px] z-[-1]" />
                <div className='flex w-full items-center justify-center flex-col md:h-[45vh] h-[30vh] z-[-1]'>
                    <div className="md:size-[238px] size-[95px]  circle-design md:right-[-140px] right-[-150px]" />
                    <div className="md:size-[320px] size-[150px] circle-design top-[140px] md:right-[-140px] right-[-150px]" />
                    <span className="text-neutral-800 lg:text-5xl md:text-3xl text-xl md:w-[40%] w-auto text-center md:mt-[60px] py-9 font-ubuntu">Find The Right Tasker</span>
                </div>
            </div>
            <SearchCategorie />
            <div className="inline-flex items-center justify-center md:gap-[50px] gap-0 mt-[75px] relative">
                {categories.map((e) =>
                    <div className="categorie-style group">
                        <div>{e.icon}</div>
                        <div className="w-fit font-ubuntu font-bold md:text-md text-xxs group-hover:text-gray-500 transition ease-in delay-100 ">
                            {e.name}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Homepage