import React from 'react'
import { useForm } from 'react-hook-form';
import { ImAttachment } from "react-icons/im";

function AddService() {
    const categories = [
        'Photographer',
        'builder',
        'Electrician',
        'Baker',
        'Painter',
        'Barber',
        'Designer'
    ];

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

  return (
    <div className='relative '>
        <div className='m-[120px] flex flex-col gap-8'>
            <div className="text-neutral-800 md:text-4xl text-md font-bold" >Add New Service</div>
            <div className="text-neutral-800 text-xl font-medium ">Give your service a title</div>
            <div className="text-neutral-500 text-lg font-normal ">Keep itshort and simple this will help us match you to the right category</div>
            <form className='relative flex flex-col gap-8' action="">
                <input className=" w-[580px] h-8 p-6 text-neutral-400 text-lg font-normal " placeholder='Exemple: create a professionalbusiness logo design' />
                <div className="text-neutral-800 text-xl font-medium">Category</div>
                <select {...register('categorie', { required: true })}  className=" w-[580px] h-14 text-xl p-2 font-normal">
                    <option value="">Select category</option>
                    {categories.map((e) => <option value={e}>{e}</option>)}
                </select>
                <div className="text-neutral-800 text-xl font-medium ">Service description</div>
                <div className="w-[580px] text-neutral-500 text-lg font-normal ">enterthe service description accurately that includes all information and conditions</div>
                <textarea type="comment" placeholder='i need ...' className='w-[580px] h-48 p-2' />
                <label for="zone-file" className="w-[162px] h-12 p-2.5 bg-zinc-200 rounded-lg justify-center items-center gap-2.5 flex">
                    <div className="text-neutral-700 text-base font-normal ">Attach a picture</div>
                    <ImAttachment className="w-4 h-4 opacity-50 relative" />
                    <input id="zone-file" className="hidden w-[162px] h-12 " type="file"/>
                </label>
                <div className="w-[601px] text-neutral-500 text-base font-normal">Add well-designed pictures to show you service professionally and increase your sales.</div>
                <div className="text-neutral-800 text-xl font-medium font-['Ubuntu']">Service Price</div>
            </form>
        </div>
    </div>
  )
}

export default AddService