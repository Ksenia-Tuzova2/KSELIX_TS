import React, { useState } from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer'
import {PostArea} from './postArea'
import { NewPostsContainer } from '../newPosts/newPostsContainer'
import { StoreContext } from '../../../../redux/createContext'
import { v1 } from 'uuid'

type MType = {
    id: string,
    message: string,
}
type Props = {
    // massageData: Array<MType>;
    // newPostText: string;
    // dispatch: (action: any) => any
}
export const PostAreaContainer = ( ) => {
    return ( <StoreContext.Consumer>
            {(store)=>{
                let state=store.getState()

                const makeNewPost = () => state.profileReducer.massageData.map((m: MType, pos: number,) => <NewPostsContainer key={v1()} message={m.message} pos={pos} dispatch={store.dispatch} id={m.id} />)
                const addPostHandler = (newtext: string) => {store.dispatch(addPostActionCreator(newtext))}
                const updateNewPostTextHandler = (text: string) => { store.dispatch(updateNewPostTextActionCreator(text))}
                return (
                <PostArea newPostText={state.profileReducer.newPostText} addPost={addPostHandler} updateNewPostText={updateNewPostTextHandler} makeNewPost={makeNewPost} />
                )
            }
        }
       </StoreContext.Consumer>
    )
 
}