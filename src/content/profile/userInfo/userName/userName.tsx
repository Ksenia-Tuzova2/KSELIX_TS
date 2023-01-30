import UserNameStyle from './userName.module.scss'
import React from 'react'


type UserNameType={
  fullName:string|null|undefined;
}



const UserNameMemo:React.FC<UserNameType>=({fullName})=>{

  console.log('username');

    return(
      <div className={UserNameStyle.UserName}>
   {fullName}</div>
    )
}
const UserName=React.memo(UserNameMemo)

export default UserName