import { Dispatch } from 'redux'
import { addPost, deletePost, MessageDataType, updateNewPostText } from '../../../../redux/profileReducer'
import { PostArea } from './postArea'
import { connect } from 'react-redux'
import { RootState } from '../../../../redux/store-redux'

// type MType = {
//     id: string,
//     message: string,
// }
// type Props = {
//     // messageData: Array<MType>;
//     // newPostText: string;
//     // dispatch: (action: any) => any
// }
// export const PostAreaContainer = ( ) => {
//     return ( <StoreContext.Consumer>
//             {(store:Store<RootState>)=>{
//                 let state=store.getState()

//                 const makeNewPost = () => state.profileReducer.messageData.map((m: MType, pos: number,) => <NewPostsContainer key={v1()} message={m.message} pos={pos} dispatch={store.dispatch} id={m.id} />)
//                 const addPostHandler = (newtext: string) => {store.dispatch(addPost(newtext))}
//                 const updateNewPostTextHandler = (text: string) => { store.dispatch(updateNewPostText(text))}
//                 return (
//                 <PostArea newPostText={state.profileReducer.newPostText} addPost={addPostHandler} updateNewPostText={updateNewPostTextHandler} makeNewPost={makeNewPost} />
//                 )
//             }
//         }
//        </StoreContext.Consumer>
//     )

// }

//повторить создание коннекта в других контейнерных компонентах,
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




export const PostAreaContainer = connect(mapStateToProps, mapDisatchToProps)(PostArea)