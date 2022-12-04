import React, { useState } from 'react'
import PostAreaStyle from './postArea.module.scss'
import Box from '../../../../box.module.scss'
import BtnStyle from '../../../../btn.module.scss'
import NewPosts from '../newPosts/newPosts'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer'
import {PostArea} from './postArea'
import { NewPostsContainer } from '../newPosts/newPostsContainer'

type MType = {
    id: string,
    message: string,
}
type Props = {
    massageData: Array<MType>;
    newPostText: string;
    dispatch: (action: any) => any
}
export const PostAreaContainer = ({ massageData, newPostText, dispatch }: Props) => {

    const makeNewPost = () => massageData.map((m: MType, pos: number,) => <NewPostsContainer message={m.message} pos={pos} dispatch={dispatch} id={m.id} />)

    const addPostHandler = (newtext: string) => {
        dispatch(addPostActionCreator(newtext))
      
    }

    const updateNewPostTextHandler = (text: string) => {
        dispatch(updateNewPostTextActionCreator(text))
    }

    return (

       < PostArea  newPostText={newPostText} addPost={addPostHandler} updateNewPostText={updateNewPostTextHandler} makeNewPost={makeNewPost} />


    )

}
      