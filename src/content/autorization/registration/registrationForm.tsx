import { Link } from 'react-router-dom'
import box from '../../../box.module.scss'

export const RegistrationForm=()=>{
    return(
           <div className={"registration__wrapper"+' '+box.box}>
               <form action="#" method="get" >
                         <input type="text" tabIndex={1} placeholder="First Name"/>
              <input type="text" tabIndex={2}  placeholder="Second Name"/>

              <input type='radio' tabIndex={3} name="gender" value="male"/><span>Male</span>
              <input type='radio'
              tabIndex={3} 
               name="gender" value="female"/><span>Female</span>
             
              <input type="text" 
              tabIndex={4}  
               placeholder="City"/>
              <input type="text"  tabIndex={5} placeholder="Education"/>
              <input type='tel' tabIndex={6} placeholder="Telephone number"/>
              <input type="password"  tabIndex={7}
               placeholder="Password"/>
              <input type="password"  tabIndex={8}  placeholder="Repeat password"/>
              <Link to='/profile'>Login</Link>
               </form>
               
           </div>
    )
}
// сделать чекбоксы интересов, прикрепить фото
