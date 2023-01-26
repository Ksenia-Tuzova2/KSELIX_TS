import ProfileStyle from './profile.module.scss'
import React from 'react'
import { Posts } from './posts/posts'
import { UserInfoContainerCforContainer, UserInfoContainerCforContainerForContainer } from './userInfo/userInfoContainerC'

type ProfileType = {}
export const Profile: React.FC<ProfileType> = () => {

    return (
        <div >
            <UserInfoContainerCforContainerForContainer/>
            <Posts/>
        </div>
    )
}

