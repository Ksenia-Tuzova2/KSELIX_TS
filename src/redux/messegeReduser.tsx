import React from "react"

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MES_TEXT = 'UPDATE-MES-TEXT'


export type MyMassageType = {
	message: string;
}
export type MakeArrType = {
	id: number,
	name: string,
	time: string,
	massage: string,
}

type MessageInitStateType={
  newMesText:string,
  makeArr: MakeArrType[],
  MyMessage:MyMassageType[],
}
const messageInitState: MessageInitStateType = {
  newMesText: '',
  makeArr: [
    {
      id: 1,
      name: 'Katya',
      time: '12:20',
      massage: 'YO',
    },
    {
      id: 2,
      name: 'TASHA',
      time: '12:23',
      massage: 'ьц',
    },
  ],
  MyMessage: [
    { message: 'hahhaha' },
		{ message: 'yoyo' },
  ],
}

type ActionType={
  type:string,
  newtext:string,
  message:string,
}

export const messegeReducer = (state: MessageInitStateType = messageInitState, action: ActionType):MessageInitStateType => {
    switch (action.type) {
      case UPDATE_MES_TEXT:{
        state.newMesText = action.newtext;
        return {...state}; 
      }
      case ADD_MESSAGE:{
        let stateCopy={...state}
        stateCopy.MyMessage=[...state.MyMessage]
        let newM = {
          massage: action.message,
        };
          stateCopy.MyMessage.unshift(newM);
          return stateCopy;
      }
  
      default: {
        return state
      }
    } 
 

}

export const addMessageActionCreator = (message: string) => {
	return { type: ADD_MESSAGE, message }
}

export const updateMesTextActionCreator = (newtext: string) => {
	return { type: UPDATE_MES_TEXT, newtext }
}