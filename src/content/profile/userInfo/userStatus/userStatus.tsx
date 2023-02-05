import userStatusStyle from './userStatus.module.scss'
import React, { useState } from 'react'

type UserStatusType = {
    status: any
}


const UserStatusMemo: React.FC<UserStatusType> = ({ status }) => {


    let [state,setState ]=useState({editMode: false})
    let [value,setValue]=useState('hi')

    let onDoubleClickHandler=()=>{
      setState({editMode:true})
    }

    let updateTextHandler=(text:string)=>{
        setValue(text)
    }

    let onBlurHandler=()=>{
        setState({editMode:false})
    }
    return (
        <div className={userStatusStyle.UserStatus}>

          {!state.editMode&&  <span onDoubleClick={ onDoubleClickHandler}>{value}</span>}

          { state.editMode&& 
           <input type='text' className="" value={value} onChange={(e) => updateTextHandler(e.currentTarget.value)} onBlur={onBlurHandler}/>}
        </div>

    )
}

export const UserStatus = React.memo(UserStatusMemo)
