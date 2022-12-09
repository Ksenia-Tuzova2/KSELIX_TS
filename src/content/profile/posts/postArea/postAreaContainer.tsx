import React, { useState } from 'react'
import PostAreaStyle from './postArea.module.scss'
import Box from '../../../../box.module.scss'
import BtnStyle from '../../../../btn.module.scss'
import NewPosts from '../newPosts/newPosts'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer'
import {PostArea} from './postArea'
import { NewPostsContainer } from '../newPosts/newPostsContainer'
import { StoreContext } from '../../../../redux/createContext'

type MType = {
    id: string,
    message: string,
}
type Props = {
    // massageData: Array<MType>;
    // newPostText: string;
    // dispatch: (action: any) => any
}
export const PostAreaContainer = (
    // { 
    // massageData, newPostText, dispatch }: Props
    ) => {
    return (
        <StoreContext.Consumer>
            {(store)=>{
                let state=store.getState()
                const makeNewPost = () => store?.massageData.map((m: MType, pos: number,) => <NewPostsContainer message={m.message} pos={pos} dispatch={store.dispatch} id={m.id} />)
                const addPostHandler = (newtext: string) => {store.dispatch(addPostActionCreator(newtext))}
                const updateNewPostTextHandler = (text: string) => { store.dispatch(updateNewPostTextActionCreator(text))}
                return (
                <PostArea newPostText={store?.newPostText} addPost={addPostHandler} updateNewPostText={updateNewPostTextHandler} makeNewPost={makeNewPost} />
                )
            }
        }
       <StoreContext.Consumer/>
    )

}