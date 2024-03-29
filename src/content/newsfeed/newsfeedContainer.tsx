import { connect } from 'react-redux'
import { RootState } from '../../redux/store-redux'
import { NewsFeed } from './newsfeed'
import { deletePost, MessageDataType } from '../../redux/profileReducer'


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



export const NewsFeedContainer = connect(mapStateToProps, {deletePost:deletePost})(NewsFeed)