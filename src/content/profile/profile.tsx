import ProfileStyle from './profile.module.scss'
import React from 'react'
import { Posts } from './posts/posts'
import { UserInfoContainer } from './userInfo/userInfoContainer'


type ProfileType = {
    profile: any
    isAuth: boolean
    status: string
    updateStatus: (status: string) => void,
    userId: number,
}
export const Profile: React.FC<ProfileType> = (props: ProfileType) => {


    return (
        <div >
            <UserInfoContainer
                status={props.status}
                updateStatus={props.updateStatus}
                id={props.userId}
            />
            <Posts />
        </div>
    )


}

