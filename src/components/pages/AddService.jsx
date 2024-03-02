import React from 'react'

function AddService() {
  return (
    <div className='relative '>
        <div className='m-[120px] flex flex-col gap-8'>
            <div className="text-neutral-800 md:text-4xl text-md font-bold" >Add New Service</div>
            <div className="text-neutral-800 text-xl font-medium ">Give your service a title</div>
            <div className="text-neutral-500 text-base font-normal ">Keep itshort and simple this will help us match you to the right category</div>
            <input className=" w-[550px] h-8 p-6 text-neutral-400 text-base font-normal " placeholder='Exemple: create a professionalbusiness logo design' />
            <div className="text-neutral-800 text-xl font-medium">Category</div>
        </div>
    </div>
  )
}

export default AddService