import { StoreContext } from '../../redux/createContext'
import {NewPostsContainer}  from '../profile/posts/newPosts/newPostsContainer'

type MType = {
  id: string,
  message: string,
}
type PropsType = {
  // massageData: Array<MType>,
  // dispatch: (action: any) => any
}

export const NewsFeed = ({
  // massageData, dispatch
  }:PropsType) => {
    return (<StoreContext.Consumer>
      {(store) => {
         let state = store.getState()

    let MakeNewPost = state.profileReducer.massageData.map((m:MType, pos: number) => <NewPostsContainer dispatch={store.dispatch} message={m.message} key={m.id} pos={pos} id={m.id} />)
    return (
        <div>
          {MakeNewPost}
        </div>
    )
  }}
  </StoreContext.Consumer >)

}
