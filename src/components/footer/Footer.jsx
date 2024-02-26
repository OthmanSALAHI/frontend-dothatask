import React from 'react'

function Footer() {
    const categories = ["Photographer", "builder", "Electrician", "Baker", "Painter", "Barber", "Designer"]
    return (
        <div div className="w-full h-auto] mx-auto bg-white shadow">
            <div className="w-full h-[0px] border border-neutral-600 my-[80px]"></div>
            <div className="flex justify-start items-baseline">
                <div className="text-do_green ml-[120px] mr-[128px] text-[50px] font-normal font-abril">Dothatask</div>
                <div className='flex flex-col gap-2 mt-[-20px] mb-[97px]'>
                    <div className="text-neutral-800 text-2xl font-medium font-Ubuntu">Categories</div>
                    {categories.map((e) =>
                        <div className="text-neutral-400 text-[22px] font-medium font-Ubuntu">{e}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Footer