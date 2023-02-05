import ProfileStyle from './profile.module.scss'
import React from 'react'
import { Posts } from './posts/posts'
import { UserInfoContainerCforContainerForContainer } from './userInfo/userInfoContainer'
import { Navigate } from 'react-router-dom'

type ProfileType = {
    profile: any
    isAuth: boolean
}
export const Profile: React.FC<ProfileType> = (props:ProfileType) => {


    //навигейт делает редирект - отправляет нас на страничку логинизациии  если мы не залогинены
   
        return (
        <div >
            <UserInfoContainerCforContainerForContainer/>
            <Posts/>
        </div>
    )

    
}

