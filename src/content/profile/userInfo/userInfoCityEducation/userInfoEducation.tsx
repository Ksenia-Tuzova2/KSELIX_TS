import React from 'react'


type UserInfoEducationType={
    job:any
}

const UserInfoJob:React.FC<UserInfoEducationType>=({job})=>{
   
    return( 
              <li>Job:{job}</li>   
    )
}

export default UserInfoJob