import box from '../../box.module.scss'
import btnStyle from '../../btn.module.scss'
// import RegistrationForm from './registration/registrationForm'
import { Link, } from 'react-router-dom'




export const Authorization = ({props}:any) => {
    return (
        <div className={box.box}>
            <form action="get">
                <input type='text' 
                placeholder='login' />
                <input type='password'
                 placeholder='password' />
                <Link className={btnStyle.btn}  to='/content'>come in</Link>
                 </form>
            <div>or</div>
            <Link  to='/registrationForm/'>registration</Link>

        </div>
    )
}