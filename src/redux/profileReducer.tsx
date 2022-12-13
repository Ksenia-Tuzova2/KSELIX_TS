import React from "react"
import {v1} from "uuid"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const DELETE_POST = 'DELETE-POST'


//редьюс значит уменьшить- мы уменьшаем нагрузку на диспатч, не громоздя условное ветвление

export type MessageDataType = {
    id: string,
    message: string,
}

export type NewPostTextType = string

export type ProfileInitStateType = {
    newPostText: NewPostTextType,
    messageData: MessageDataType[],


}

export const profileInitialState: ProfileInitStateType = {
    newPostText: '' as string,
    messageData: [
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
    ] as Array<MessageDataType>
}

type ActionType = {
    type: string,
    newtext: string,
    id: string
}

//креаторы для того, чтобы разбить респонсобилити, как и константы с типами
export const addPostActionCreator = (newtext: string) => {
    return {type: ADD_POST, newtext}
}

export const updateNewPostTextActionCreator = (newtext: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newtext}
}

export const deletePostActionCreator = (id: string) => {
    return {type: DELETE_POST, id}
}


export const profileReducer = (state: ProfileInitStateType = profileInitialState, action: ActionType): ProfileInitStateType => {
    // debugger
    switch (action.type) {
        case DELETE_POST: {
            let stateCopy = {...state}
            state.messageData = state.messageData.filter((t) => {
                return t.id !== action.id
            })

            return state;
        }

        case UPDATE_NEW_POST_TEXT: {
            console.log("update")
            state.newPostText = action.newtext
            return state;
        }

        case ADD_POST: {
            let newPost = {
                id: v1(),
                message: action.newtext,
            }
            state.messageData.unshift(newPost)
            return state;
        }
        default: {
            return state
        }
    }


}

