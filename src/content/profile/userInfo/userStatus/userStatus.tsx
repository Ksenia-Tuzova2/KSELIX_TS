import userStatusStyle from './userStatus.module.scss'
import React, { useState } from 'react'

type UserStatusType = {
    updateStatus:(status:string)=>void,
    status:string
}


const UserStatusMemo: React.FC<UserStatusType> = ({updateStatus , status}) => {


    let [state,setState ]=useState({editMode: false})
    let [value,setValue]=useState('')

    let onDoubleClickHandler=()=>{
      setState({editMode:true})
    }

    let updateTextHandler=(text:string)=>{
        setValue(text)
    }

    let onBlurHandler=(value:string)=>{
        console.log(value);
        
        setState({editMode:false})
        updateStatus(value)
    }
    return (
        <div className={userStatusStyle.UserStatus}>

          {!state.editMode&&<span onDoubleClick={ onDoubleClickHandler}>{status===''?'status: ':status}</span>}

          { state.editMode&& 
           <input type='text'
           placeholder='status'
            className="" 
            value={value} 
            autoFocus={true}
            onChange={(e) => updateTextHandler(e.currentTarget.value)} 
            onBlur={()=>onBlurHandler(value)}/>}
        </div>

    )
}

export const UserStatus = React.memo(UserStatusMemo)
