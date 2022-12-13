import { Store} from 'redux'
import React, {  useState } from 'react'
import  { Dispatch } from 'redux'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer'
import {PostArea} from './postArea'
import { NewPostsContainer } from '../newPosts/newPostsContainer'
// import { StoreContext } from '../../../../redux/createContext'
import { v1 } from 'uuid'
import { connect } from 'react-redux'
import { RootState } from '../../../../redux/store-redux'

type MType = {
    id: string,
    message: string,
}
type Props = {
    // messageData: Array<MType>;
    // newPostText: string;
    // dispatch: (action: any) => any
}
// export const PostAreaContainer = ( ) => {
//     return ( <StoreContext.Consumer>
//             {(store:Store<RootState>)=>{
//                 let state=store.getState()

//                 const makeNewPost = () => state.profileReducer.messageData.map((m: MType, pos: number,) => <NewPostsContainer key={v1()} message={m.message} pos={pos} dispatch={store.dispatch} id={m.id} />)
//                 const addPostHandler = (newtext: string) => {store.dispatch(addPostActionCreator(newtext))}
//                 const updateNewPostTextHandler = (text: string) => { store.dispatch(updateNewPostTextActionCreator(text))}
//                 return (
//                 <PostArea newPostText={state.profileReducer.newPostText} addPost={addPostHandler} updateNewPostText={updateNewPostTextHandler} makeNewPost={makeNewPost} />
//                 )
//             }
//         }
//        </StoreContext.Consumer>
//     )
 
// }

//повторить создание коннекта в других контейнерных компонентах,
export type NewPostTextType={
    newPostText:string
}
type MapStateToPropsType=NewPostTextType

export type postAreaContainerType=MapDispatchToPropsType & MapStateToPropsType

type MapDispatchToPropsType={
    addPost:(newtext: string)=>void,
    updateNewPostText:(text: string)=>void,
}
let mapDisatchToProps=(dispatch:Dispatch):MapDispatchToPropsType=>{
    return {
         addPost:(newtext: string)=>dispatch(addPostActionCreator(newtext)),
          updateNewPostText:(text: string)=>dispatch(updateNewPostTextActionCreator(text)),
    }
}

let mapStateToProps=(state:RootState):MapStateToPropsType=>{
    return {
        newPostText: state.profileReducer.newPostText
    }
}


export const PostAreaContainer=connect(mapStateToProps, mapDisatchToProps)(PostArea)