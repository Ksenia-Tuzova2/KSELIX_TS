import ProfileStyle from './profile.module.scss'
import React from 'react'
import { Posts } from './posts/posts'
import {UserInfoContainerC} from '././userInfo/userInfoContainerC'


type ProfileType = {
    // messageData: Array<MType>,
    // newPostText: string,
    // dispatch: (action: any) => any
}
export const Profile: React.FC<ProfileType> = ({
    //  dispatch, messageData, newPostText
}) => {

    return (
        <div >
            <UserInfoContainerC />
            <Posts
            // messageData={messageData}
            //     newPostText={newPostText}
            //     dispatch={dispatch}
            />
        </div>
    )
}

