import React from 'react'
import BtnStyle from './btn.module.scss'


type PropsType={
    name:string
}
const Btn=(props: PropsType)=>{
    return(
        <div >
        <a className={BtnStyle.Btn} href="#">{props.name}
        </a>
        </div>
    )
}

export default Btn