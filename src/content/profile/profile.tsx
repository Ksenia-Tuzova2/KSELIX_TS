import ProfileStyle from './profile.module.scss'
import React from 'react'
import { Posts } from './posts/posts'
import { UserInfo } from './userInfo/userInfo-list'

type MType = {
    // id: string,
    // message: string,
}

type ProfileType = {
    // massageData: Array<MType>,
    // newPostText: string,
    // dispatch: (action: any) => any
}
export const Profile: React.FC<ProfileType> = ({
    //  dispatch, massageData, newPostText
}) => {
    console.log('rerender')
    // debugger
    return (
        <div >
            <UserInfo />
            <Posts
            // massageData={massageData}
            //     newPostText={newPostText}
            //     dispatch={dispatch}
            />
        </div>
    )
}

