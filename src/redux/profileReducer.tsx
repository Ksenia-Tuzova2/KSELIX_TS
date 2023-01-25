import React from "react"
import { v1 } from "uuid"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const DELETE_POST = 'DELETE-POST'
const SET_PROFILE = 'SET_PROFILE'


//редьюс значит уменьшить- мы уменьшаем нагрузку на диспатч, не громоздя условное ветвление

export type MessageDataType = {
    id: string,
    message: string,
}

export type NewPostTextType = string

export type ContactsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
}

export type ProfileTrueType = {

    aboutMe: string | null,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
}

export type ProfileType = ProfileTrueType | null


export type ProfileInitStateType = {
    newPostText: NewPostTextType,
    messageData: MessageDataType[],
    profile: ProfileType | null,
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
    ] as Array<MessageDataType>,
    profile: null,
}

type ActionType = {
    type: string,
    newtext: string,
    id: string,
    profile: ProfileTrueType,
}

//я переименовала креаторы в имена функций ,которые они делают, чтобы это было чуть короче и понятнее 
//креаторы для того, чтобы разбить респонсобилити, как и константы с типами
export const addPost = (newtext: string) => {
    return { type: ADD_POST, newtext }
}

export const updateNewPostText = (newtext: string) => {
    return { type: UPDATE_NEW_POST_TEXT, newtext }
}

export const deletePost = (id: string) => {
    return { type: DELETE_POST, id }
}

export const setUserProfile = (profile: ProfileTrueType) => {
    return { type: SET_PROFILE, profile }
}

export const profileReducer = (state: ProfileInitStateType = profileInitialState, action: ActionType): ProfileInitStateType => {
    // почему мы не можем создавать при каждом вызове редьюсера эту переменную и отдавать ее разным кейсом, ведь эта переменная нужна всм кейсам
    // let stateCopy = { ...state, messageData: [...state.messageData] }


    switch (action.type) {
        case DELETE_POST: {
            return {
                ...state, messageData: [...state.messageData.filter((t) => {
                    return t.id !== action.id
                })]
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.newtext };
        }

        case ADD_POST: {
            // добавляем новый обЪект в фигурных скобках
            return { ...state, newPostText: '', messageData: [{ id: v1(), message: action.newtext }, ...state.messageData] };
        }

        case SET_PROFILE: {
            return { ...state, profile: action.profile };
        }

        default: {
            return state
        }
    }
}
