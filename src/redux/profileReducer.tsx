import { ThunkAction } from "redux-thunk"
import { v1 } from "uuid"
import { profileApi } from "../api/profileApi"



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

export type ProfileType = {

    aboutMe: string ,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string ,
    fullName: string ,
    userId: number,
    photos: {
        small: string 
        large: string 
    }
}




export type ProfileInitStateType = {
    newPostText: NewPostTextType,
    messageData: MessageDataType[],
    profile: ProfileType | object,
    status: string
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
    profile:{},
    status: '',
}


//я переименовала креаторы в имена функций ,которые они делают, чтобы это было чуть короче и понятнее 
//креаторы для того, чтобы разбить респонсобилити, как и константы с типами
export const addPost = (newtext: string) => {
    return { type: "ADD_POST", newtext } as const
}

export const setStatus = (status: string) => {
    return { type: "SET_STATUS", status } as const
}

export const updateStatus = (status: string) => {
    return { type: "UPDATE_STATUS" as const, status } as const
}

export const updateNewPostText = (newtext: string) => {
    return { type: "UPDATE_NEW_POST_TEXT", newtext } as const
}

export const deletePost = (id: string) => {
    return { type: "DELETE_POST", id } as const
}

export const setUserProfile = (profile: ProfileType) => {
    return { type: "SET_PROFILE", profile } as const
}

type ProfileActionType = ReturnType<typeof setUserProfile> | ReturnType<typeof deletePost> | ReturnType<typeof updateNewPostText> | ReturnType<typeof addPost> | ReturnType<typeof setStatus> | ReturnType<typeof updateStatus>

export const profileReducer = (state: ProfileInitStateType = profileInitialState, action: ProfileActionType): ProfileInitStateType => {


    switch (action.type) {
        case "DELETE_POST": {
            return {
                ...state, messageData: [...state.messageData.filter((t) => {
                    return t.id !== action.id
                })]
            };
        }

        case "UPDATE_NEW_POST_TEXT": {
            return { ...state, newPostText: action.newtext };
        }

        case "ADD_POST": {
            // добавляем новый обЪект в фигурных скобках
            return { ...state, newPostText: '', messageData: [{ id: v1(), message: action.newtext }, ...state.messageData] };
        }

        case "SET_PROFILE": {
            return { ...state, profile: action.profile };
        }

        case "SET_STATUS": {
            return { ...state, status:action.status };
        }

        case "UPDATE_STATUS": {
            return { ...state, status: action.status };
        }

        default: {
            return state
        }
    }
}

export const getUserData = (userId: number): ThunkAction<void, {}, {}, any> => {
    return function (dispatch: any): void {

        //обратные кавычки для того чтобы записать квери параметр с переменной
        //квери параметры идут после вопросительного знака и записываются после амперсанта


        profileApi.dataRequest(userId).then((data: any) => {
            //запихиваем в пропсы для профиля реквест дату, которые пришли с сервера
            dispatch(setUserProfile(data))
        }).catch((error: any) => {
            // handle error
            console.log(error);
        }
        )
    }

}

export const updateStatusThunk = (status: string): ThunkAction<void, {}, {}, any> => {
    return function (dispatch: any): void {


        profileApi.updateStatusRequest(status).then((data: any) => {
            if (data.resultCode === 0) {
                dispatch(updateStatus(status))
            }

        }).catch((error: any) => {
            // handle error
            console.log(error);
        }
        )
    }

}


export const getStatusThunk = (id: number): ThunkAction<void, {}, {}, any> => {
    return function (dispatch: any): void {


        profileApi.getStatusRequest(id).then((data: any) => {
            if (data.resultCode === 0) {
            dispatch(setStatus(data))
            }

        }).catch((error: any) => {
            // handle error
            console.log(error);
        }
        )
    }

}

