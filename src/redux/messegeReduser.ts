import React from "react"


//не использовать расширение жсх для редьюсеров - могут быть баги

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MES_TEXT = 'UPDATE-MES-TEXT'


export type MyMessageType = {
	message: string;
}
export type MakeArrType = {
	id: number,
	name: string,
	time: string,
	message: string,
}

type MessageInitStateType={
  newMesText:string,
  makeArr: MakeArrType[],
  MyMessage:MyMessageType[],
}
const messageInitState: MessageInitStateType = {
  newMesText: '',
  makeArr: [
    {
      id: 1,
      name: 'Katya',
      time: '12:20',
      message: 'YO',
    },
    {
      id: 2,
      name: 'TASHA',
      time: '12:23',
      message: 'ьц',
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
  
  // не надо здесь делать переменные, потому что при каждом действии диспач в тандеме с экшн креэйтером залезает в редьюсер и использует лишнюю помять для создания переменных
  
  switch (action.type) {
      case UPDATE_MES_TEXT:{
        return {...state, newMesText:action.newtext}; 
      }
      case ADD_MESSAGE:{
          return {...state,newMesText:'', MyMessage:[...state.MyMessage,{message:action.message}]}
      }
  
      default: {
        return state
      }
    } 
 

}

export const addMessage = (message: string) => {
	return { type: ADD_MESSAGE, message }
}

export const updateMesText = (newtext: string) => {
	return { type: UPDATE_MES_TEXT, newtext }
}