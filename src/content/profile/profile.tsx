import ProfileStyle from './profile.module.scss'
import React from 'react'
import { Posts } from './posts/posts'
import { UserInfo } from './userInfo/userInfo'
import { ProfileType } from '../../redux/profileReducer'


export type ProfileTypes = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void,

}
export const Profile: React.FC<ProfileTypes> = (props: ProfileTypes) => {


    return (
        <div >
            <UserInfo
            profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <Posts />
        </div>
    )


}

