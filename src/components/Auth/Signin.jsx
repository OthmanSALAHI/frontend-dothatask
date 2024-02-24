import React from 'react'
import { Link } from 'react-router-dom';
import google_logo from '../../assets/google_logo.png';
import { useForm } from 'react-hook-form';
import Errors from '../areas/Errors';

function Signin() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onsumbit = (e) => {
        alert(e.email + " " + e.password)
        console.log(e)
    }
    return (
        <div className="w-full flex relative bg-neutral-100">
            <div className="custom-dynamic-style">
                <div className="text-stone-950 md:text-5xl text-xl font-bold md:mb-[40px]">Sign in</div>
                <div className="flex-col justify-center items-center md:gap-10 gap-5 flex">
                    <form onSubmit={handleSubmit(onsumbit)} className="flex-col justify-center items-center md:gap-10 gap-5 flex" action="" >
                        <div className="flex-col justify-start items-start gap-[15px] flex">
                            <input
                                type="email"
                                placeholder="email adress"
                                {...register('email', { required: true })}
                                className="custom-input-style"
                            />
                            {errors.email && <Errors content={"This field is required"} />}
                            <input
                                type="password"
                                placeholder="Password"
                                {...register('password', { required: true })}
                                className="custom-input-style"
                            />
                            {errors.password && <Errors content="This field is required" />}
                        </div>
                        <div className="justify-start items-center md:gap-[195px] lg:gap-[238px] gap-4 inline-flex mb-[-40px]">
                            <div className="justify-start items-center md:gap-[9px] gap-1 flex">
                                <input type='checkbox' className="md:w-6 md:h-6 w-3 h-3 relative" />
                                <p className="text-left text-neutral-600 md:text-lg text-sm font-normal">Remember me</p>
                            </div>
                            <Link to={'/forgotpassword'} className="text-right text-neutral-600 md:text-lg text-sm font-normal">Forgot password?</Link>
                        </div>
                        <div
                            className="custom-button-style">
                            <button type='submit' className="text-white md:text-2xl text-xl font-medium font-['Ubuntu']">login</button>
                        </div>
                    </form>
                    <div className="justify-start items-start md:gap-1 gap-0 inline-flex">
                        <div className="text-neutral-600 text-xl font-medium">
                            Doesn't have an account yet?
                            <Link to='/signup' className="text-center text-emerald-600 md:text-lg text-sm font-normal md:ml-[5px]">Sign up</Link>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-[9px] inline-flex">
                        <div className="lg:w-[187px] md:w-[150px] w-[98px] h-[0px] border border-neutral-600"></div>
                        <div className="text-center text-neutral-600 md:text-lg text-sm font-normal">Login With Others</div>
                        <div className="lg:w-[187px] md:w-[150px] w-[98px] h-[0px] border border-neutral-600"></div>
                    </div>
                    <div className="md:w-[542px] w-[225px] h-12 p-2.5 bg-white rounded-[5px] shadow justify-center items-center mb-[35px] gap-[19px] inline-flex">
                        <img className="md:w-[38px] md:h-[38px] w-[22px] h-[22px]" src={google_logo} />
                        <div className="text-neutral-600 md:text-lg text-md font-medium">Sign in with google</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin