import React from 'react'


type UserInfoEducationType={
    nameOfOrg:string
}

const UserInfoEducation:React.FC<UserInfoEducationType>=({nameOfOrg})=>{
   
    return( 
              <li>Education:{nameOfOrg}</li>   
    )
}

export default UserInfoEducation