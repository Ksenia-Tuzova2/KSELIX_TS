import NewPosts from './newPosts/newPosts'
import {PostArea} from './postArea/postArea'
import React from 'react'


export const Posts = ({ massageData, addPost, newPostText, updateNewPostText, deletePost}:any) => {
// debugger


    return (
        <div className="content__post">
            <PostArea addPost={addPost} massageData={massageData} newPostText={newPostText} updateNewPostText={updateNewPostText} deletePost={deletePost}/>
        
        </div>

    )
}
