import NewPosts from './newPosts/newPosts'
import {PostArea} from './postArea/postArea'
import React from 'react'
import { PostAreaContainer } from './postArea/postAreaContainer'
type MType = {
    id: string,
    message: string,
  }
type PropsType={
    massageData:Array<MType>,
     newPostText:string, 
     dispatch: (action: any) => any
}

export const Posts = ({ massageData, newPostText,  dispatch}:PropsType) => {
// debugger


    return (
        <div className="content__post">
            <PostAreaContainer 
           
            massageData={massageData} newPostText={newPostText} 
            dispatch={dispatch}/>
        
        </div>

    )
}
