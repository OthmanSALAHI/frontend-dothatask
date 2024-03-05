import React from 'react'

function TypePage() {
  return (
    <div className='w-[850px] flex flex-col gap-14 mx-auto my-24'>
        <div className="w-auto text-center text-stone-950 text-4xl font-bold font-nunito">Register as a client or freelancer</div>
        <div className='w-[700px] h-64 flex gap-8 mx-auto'>
            <div className="w-[380px] h-[184px] flex rounded-[10px] border-2 border-zinc-400 hover:border-do_green justify-center items-center gap-2.5 mt-5">
                <div className="w-[280px] text-center flex justify-center items-center text-stone-950 text-3xl font-normal font-nunito">I'm a client looking to hire for a project.</div>
            </div>
            <div className="w-[380px] h-[184px] flex rounded-[10px] border-2 border-zinc-400 hover:border-do_green justify-center items-center gap-2.5 mt-5">
                <div className="w-[280px] text-center flex justify-center items-center text-stone-950 text-3xl font-normal font-nunito">I'm a client looking to hire for a project.</div>
            </div>
        </div>
        <button className="w-40 h-[38px] mx-auto px-5 bg-do_green hover:bg-do_hover_green  rounded-lg justify-center items-center gap-2.5">
            <div className="text-do_gray_text text-base font-medium font-ubuntu">Choose your job</div>
        </button>
    </div>
  )
}

export default TypePage