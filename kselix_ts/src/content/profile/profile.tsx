import ProfileStyle from './profile.module.scss'
import React from 'react'
import { Posts } from './posts/posts'
import { UserInfo } from './userInfo/userInfo-list'


type ProfileType={
    massageData:any, 
    addPost:any, 
    newPostText:any,
     updateNewPostText:any
}
export const Profile:React.FC<ProfileType> = ({ massageData, addPost, newPostText, updateNewPostText}) => {
    // debugger
    return (
        <div >
            <UserInfo />
            <Posts massageData={massageData} addPost={addPost} newPostText={newPostText} updateNewPostText={updateNewPostText}/>
        </div>
    )
}

