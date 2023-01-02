import React from 'react'
import btnStyle from './btn.module.scss'


type PropsType={
    name:string
}
const Btn=(props: PropsType)=>{
    return(
        <div >
        <a className={btnStyle.Btn} href="#">{props.name}
        </a>
        </div>
    )
}

export default Btn