import UserNameStyle from './userName.module.scss'
import React from 'react'


type UserNameType={
  frstName:string;
  scndName:string
}
const UserName:React.FC<UserNameType>=({frstName,scndName})=>{
    return(
      <div className={UserNameStyle.UserName}>
   {frstName} {scndName}</div>
    )
}

export default UserName