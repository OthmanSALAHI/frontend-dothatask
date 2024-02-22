import React from 'react'
import Logo from '../logo'
import Inputs from '../areas/Inputs'
import Buttons from '../areas/Buttons'

function Signup() {
    return (
        <div className='className="w-full flex  relative bg-neutral-100"'>
            <Logo />
            <div className="sign">
                <div className="text-stone-950 text-5xl font-bold mb-[40px]">Sign up</div>
                <div className="flex-col justify-start items-start gap-[15px] flex">
                    <Inputs placeholder={"First name and last name"} />
                    <Inputs placeholder={"email adresse"} />
                    <Inputs placeholder={"Password"} />
                    <Inputs placeholder={"Phone number"} />
                    <Inputs placeholder={"city"} />
                    <Buttons content={"create account"} />
                </div>
            </div>
        </div>
    )
}

export default Signup