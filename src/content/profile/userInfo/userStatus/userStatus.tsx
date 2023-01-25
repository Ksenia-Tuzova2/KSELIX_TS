import userStatusStyle from './userStatus.module.scss'
import React from 'react'

type UserStatusType={
    status:any
}
const UserStatus:React.FC<UserStatusType>=({status})=>{
    return(
              <div className={userStatusStyle.UserStatus}>{status}</div>
        
    )
}

export default UserStatus