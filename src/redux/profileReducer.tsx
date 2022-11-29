import React from "react"
import { v1 } from "uuid"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const DELETE_POST = 'DELETE-POST'


//редьюс значит уменьшить- мы уменьшаем нагрузку на диспатч, не громоздя условное ветвление

export const profileReducer=(state:any, action:any)=>{
debugger
  switch(action.type){
    case DELETE_POST: 
     state.massageData =state.massageData.filter((t:any) => t.id !== action.id);
     return state;
     case UPDATE_NEW_POST_TEXT: 
      state.newPostText = action.newtext
      return state; 
      case ADD_POST:  let newPost = {
        id: v1(),
        message: action.newtext,
      }
      state.massageData.unshift(newPost)
      return state; 
      default: return state
  }



}

//креаторы для того, чтобы разбить респонсобилити, как и константы с типами
export const addPostActionCreator = (newtext: string) => {
	return { type: ADD_POST, newtext }
}

export const updateNewPostTextActionCreator = (newtext: string) => {
	return { type: UPDATE_NEW_POST_TEXT, newtext }
}

export const deletePostActionCreator = (id: string) => {
	return { type: DELETE_POST, id }
}