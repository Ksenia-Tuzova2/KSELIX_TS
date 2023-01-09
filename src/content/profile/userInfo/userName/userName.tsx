import UserNameStyle from './userName.module.scss'
import React from 'react'


type UserNameType={
  fullName:string|null|undefined;
}
const UserName:React.FC<UserNameType>=({fullName})=>{
    return(
      <div className={UserNameStyle.UserName}>
   {fullName}</div>
    )
}

export default UserName