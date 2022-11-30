import ProfileStyle from './profile.module.scss'
import React from 'react'
import { Posts } from './posts/posts'
import { UserInfo } from './userInfo/userInfo-list'


type ProfileType = {
    massageData: any,
    newPostText: any,
    dispatch: (action: any) => any
}
export const Profile: React.FC<ProfileType> = ({ dispatch, massageData, newPostText, }) => {
    // debugger
    return (
        <div >
            <UserInfo />
            <Posts massageData={massageData}
                newPostText={newPostText}
                dispatch={dispatch} />
        </div>
    )
}

