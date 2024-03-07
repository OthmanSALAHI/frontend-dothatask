import React from 'react'
import logo from "/logo.png";
import { Link } from 'react-router-dom';
function AboutUs() {
  return (
    <div className='font-ubuntu'>
        <div className='flex gap-5 w-[530px] mx-auto my-24 text-center items-center justify-center'>
            <Link to={'/'} className=" flex gap-2 items-center">
                <img className="max-w-[80px]" src={logo} alt="logo.png" />
                <p className="text-6xl text-do_green font-abril font-500 hidden sm:block">
                    Dothatask
                </p>
            </Link>
        </div>
        <div className="w-[1440px] mx-auto  text-center text-stone-950 text-xl font-normal">Dothatask revolutionizes the way individuals connect with skilled professionals. This platform is your go-to destination for seamlessly finding artisans and experts from various cities. Whether you're seeking a service or offering your skills, DoThatAsk simplifies the process, creating a vibrant community of opportunity seekers and providers.</div>
        <div className="w-[204px] text-center mx-auto my-12 text-stone-950 text-3xl font-bold font-Ubuntu">Key Features</div>
        <div className='grid grid-cols-2 mx-auto w-[1440px]'>
        <div className="w-[478px] text-center"><span className="text-neutral-600 text-xl font-bold ">Discover Services:
            <br/></span><span className="text-neutral-600 text-lg font-normal ">Explore a diverse array of services from talented professionals across different cities. From home improvement to creative services, DoThatAsk connects you with the expertise you need.
            <br/></span><span className="text-neutral-600 text-lg font-normal ">
            </span></div>
        </div>
    </div>
  )
}

export default AboutUs