import React from "react"
import { v1 } from "uuid"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const DELETE_POST = 'DELETE-POST'


//редьюс значит уменьшить- мы уменьшаем нагрузку на диспатч, не громоздя условное ветвление

export type MassageData = {
  id: string,
  message: string,
}

type ProfileInitStateType = {
  massageData: MassageData[],
  newPostText: string,

}

const profileInitialState: ProfileInitStateType={
  newPostText: '',
  massageData: [
    {
      id: "1",
      message: 'mmmmm',
    },
    {
      id: "2",
      message: 'lorem',
    },
    {
      id: "3",
      message: 'lorem',
    },
    {
      id: "4",
      message: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?',
    },
    {
      id: "5",
      message: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?',
    },
    {
      id: '6',
      message: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?',
    },
  ]
}

type ActionType={
  type:string,
  newtext:string,
  id:string
}

export const profileReducer = (state: ProfileInitStateType=profileInitialState, action: ActionType): ProfileInitStateType => {
  // debugger
  switch (action.type) {
    case DELETE_POST: {
      state.massageData = state.massageData.filter((t) => t.id !== action.id);
      return {...state};
    }
     
    case UPDATE_NEW_POST_TEXT: {

      state.newPostText = action.newtext
      return {...state};
    }
     
    case ADD_POST:{
      let newPost = {
        id: v1(),
        message: action.newtext,
      }
        state.massageData.unshift(newPost)
        return {...state};
    } 
    default:{
       return state
      }
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