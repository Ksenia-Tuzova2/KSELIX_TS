import { Dispatch } from 'redux'
import { addPost, deletePost, MessageDataType, updateNewPostText } from '../../../../redux/profileReducer'
import { PostArea } from './postArea'
import { connect } from 'react-redux'
import { RootState } from '../../../../redux/store-redux'


export type NewPostTextType = {
    newPostText: string
    messageData: MessageDataType[]
}
type MapStateToPropsType = {
    newPostText: string,
    messageData: MessageDataType[]
}


type MapDispatchToPropsType = {
    addPost: (newtext: string) => void,
    updateNewPostText: (text: string) => void,
    deletePost: (id: string) => void
}

export type postAreaContainerType = MapDispatchToPropsType & MapStateToPropsType

let mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        newPostText: state.profileReducer.newPostText,
        messageData: state.profileReducer.messageData
    }
}

let mapDisatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newtext: string) => dispatch(addPost(newtext)),
        updateNewPostText: (text: string) => dispatch(updateNewPostText(text)),
        deletePost: (id: string) => dispatch(deletePost(id))

    }
}




export const Posts = connect(mapStateToProps, mapDisatchToProps)(PostArea)