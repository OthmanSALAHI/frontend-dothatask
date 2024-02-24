import React from 'react'
import { Link } from 'react-router-dom';
import google_logo from '../../assets/google_logo.png';
import { useForm } from 'react-hook-form';
import Errors from '../areas/Errors';

function ForgotPassword() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onsumbit = (e) => {
        console.log(e)
    }
    return (
        <div className='w-full flex  relative bg-neutral-100'>
            <div className='custom-dynamic-style'>
                <h1>Hello world</h1>
            </div>

        </div>
    )
}

export default ForgotPassword