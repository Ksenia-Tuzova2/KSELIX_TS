import Ks from '../../img/logo.svg'
import logoStyle from './logo.module.scss'
import React from 'react'
const Logo=()=>{
    return(
        <div className={logoStyle.Logo_wrapper}>
            <div><img className={logoStyle.logo__img} src={Ks} alt='#'></img></div> 
            <div className={logoStyle.logo__name} >Kselix</div>
        </div>
        
    )
}

export default Logo
