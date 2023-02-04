import ProfileStyle from './profile.module.scss'
import React from 'react'
import { Posts } from './posts/posts'
import { UserInfoContainerCforContainerForContainer } from './userInfo/userInfoContainer'

type ProfileType = {}
export const Profile: React.FC<ProfileType> = () => {

    return (
        <div >
            <UserInfoContainerCforContainerForContainer/>
            <Posts/>
        </div>
    )
}

