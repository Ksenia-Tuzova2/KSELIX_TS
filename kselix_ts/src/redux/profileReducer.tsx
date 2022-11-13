import React from "react"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const DELETE_POST = 'DELETE-POST'


export const profileReducer=(state:any, action:any)=>{

   if (action.type === DELETE_POST) {
    this._State.Profile.massageData =state.massageData.filter((t) => t.id !== action.id)
    
  } 

  else if (action.type === UPDATE_NEW_POST_TEXT) {
   state.newPostText = action.newtext;
  } 

  else if (action.type === ADD_POST) {
    let newPost = {
      id: v1(),
      message: action.newtext,
    }
    state.massageData.unshift(newPost)
    
  }


  return state
}