import userStatusStyle from './userStatus.module.scss'
import React from 'react'

type UserStatusType={
    status:any
}


const UserStatusMemo:React.FC<UserStatusType>=({status})=>{
    console.log('status');
    
    return(
              <div className={userStatusStyle.UserStatus}>{status}</div>
        
    )
}

export const UserStatus=React.memo(UserStatusMemo)
