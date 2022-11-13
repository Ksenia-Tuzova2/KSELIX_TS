import NewPosts from './newPosts/newPosts'
import {PostArea} from './postArea/postArea'
import React from 'react'


export const Posts = ({ massageData, addPost, newPostText, updateNewPostText, dispatch}:any) => {
// debugger


    return (
        <div className="content__post">
            <PostArea 
           
            massageData={massageData} newPostText={newPostText} 
            dispatch={dispatch}/>
        
        </div>

    )
}
