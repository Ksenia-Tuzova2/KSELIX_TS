import React from 'react'
import box from '../../box.module.scss'
import btnStyle from '../../btn.module.scss'
// import RegistrationForm from './registration/registrationForm'
import { Link, Routes, Route } from 'react-router-dom'
import { LoginMapContainerType } from '../../login/loginContainer'




export const Authorization = ({props}:any) => {
    return (
        <div className={box.box}>
            <form action="get">
                <input type='text' placeholder='login' />
                <input type='password' placeholder='password' />
                <Link to='/content'>come in</Link>
                 </form>
            <div>or</div>
            <Link className={btnStyle.btn} to='/registrationForm/'>registration</Link>

        </div>
    )
}