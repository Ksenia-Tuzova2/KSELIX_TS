import { connect } from 'react-redux'
import { RootState } from '../../redux/store-redux'
import { NewsFeed } from './newsfeed'
import { deletePostActionCreator, MessageDataType } from '../../redux/profileReducer'
import { Dispatch } from 'redux'

type MapStateToPropsType = {
  messageData: MessageDataType[]
}

type MapDispatchToPropsType = {
  deletePost: (id: string) => void
}


export type NewsFeedContainerType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state: RootState): MapStateToPropsType => {
  return {
    messageData: state.profileReducer.messageData
  }
}

let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    deletePost: (id: string) => dispatch(deletePostActionCreator(id))
  }
}


export const NewsFeedContainer = connect(mapStateToProps, MapDispatchToProps)(NewsFeed)