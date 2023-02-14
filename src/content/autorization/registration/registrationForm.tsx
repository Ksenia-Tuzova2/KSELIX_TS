import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import box from '../../../box.module.scss'



type FieldsPropsType={
         firstName:string,
          lastName:string,
           email:string,
            sex:any,
             employed:any 
  
}

type RegistrationFormPropsType={
    fields:string
    handleSubmit:any
    resetForm:any
    submitting:any

}

let RegistrationForm = (props:any) => {
    // console.log(props);
    
    return (
        <div className={"registration__wrapper" + ' ' + box.box}>
            <form action="post" method="get" name={'login'} onSubmit={props.onSubmit}>
                <Field component={'input'} tabIndex={1} placeholder="First Name" />
                <Field component={'input'} tabIndex={2} placeholder="Second Name" />

                <input type='radio' tabIndex={3} name="gender" value="male" /><span>Male</span>
                <input type='radio'
                    tabIndex={3}
                    name="gender" value="female" /><span>Female</span>

                <input type="text"
                    tabIndex={4}
                    placeholder="City" />
                <input type="text" tabIndex={5} placeholder="Education" />
                <input type='tel' tabIndex={6} placeholder="Telephone number" />
                <input type="password" tabIndex={7}
                    placeholder="Password" />
                <input type="password" tabIndex={8} placeholder="Repeat password" />
                {/* <Link to='/profile'> */}
                    <button>autorize</button>
                    {/* </Link> */}
            </form>

        </div>
    )
}
// сделать чекбоксы интересов, прикрепить фото

export const RegistrationFormRedux = reduxForm(
    {
        form: 'login',
      
    }
)(RegistrationForm)