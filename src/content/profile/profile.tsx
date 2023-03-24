import ProfileStyle from './profile.module.scss'
import React from 'react'
import { UserInfo } from './userInfo/userInfo'
import { ProfileType } from '../../redux/profileReducer'
import { Posts } from './posts/postArea/postAreaContainer'


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

