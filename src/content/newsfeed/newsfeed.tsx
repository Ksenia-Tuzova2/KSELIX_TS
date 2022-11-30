import NewPosts from '../profile/posts/newPosts/newPosts'

type MType = {
  id: string,
  message: string,
}
type PropsType = {
  massageData: Array<MType>,
  dispatch: (action: any) => any
}

export const NewsFeed = ({massageData, dispatch}:PropsType) => {

    let MakeNewPost = massageData.map((m:MType, pos: number) => <NewPosts dispatch={dispatch} message={m.message} key={m.id} pos={pos} id={m.id} />)
    return (
        <div>
          {MakeNewPost}
        </div>
    )
}
