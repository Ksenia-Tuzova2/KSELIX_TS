
import NewPosts from '../profile/posts/newPosts/newPosts'
import { NewsFeedContainerType } from './newsfeedContainer'

type MType = {
  id: string,
  message: string,
}

export const NewsFeed = ({ messageData, deletePost }: NewsFeedContainerType) => {

  let MakeNewPost = messageData.map((m: MType, pos: number) => {
    return <NewPosts
      message={m.message}
      key={m.id}
      pos={pos}
      id={m.id}
      deletePost={deletePost} />
  })
  return (
    <div>
      {MakeNewPost}
    </div>
  )
}
