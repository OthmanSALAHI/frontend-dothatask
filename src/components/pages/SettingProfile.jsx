import React from 'react'
import Personalinfo from '../settingProfile/Personalinfo'
import Personaldescription from '../settingProfile/Personaldescription'

function SettingProfile() {
  return (
    <div className='m-32'>
        <div className='flex flex-col gap-16'>
            <div className="text-neutral-800 text-5xl font-bold ">My Profile</div>
            <div className='flex gap-10'>
              <Personalinfo />
              <Personaldescription />
            </div>
        </div>
    </div>
  )
}

export default SettingProfile