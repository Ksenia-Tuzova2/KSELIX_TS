import NewPosts from '../profile/posts/newPosts/newPosts'

export const NewsFeed = (props: any) => {

    let MakeNewPost = props.massageData.map((m: any, pos: number) => <NewPosts massage={m.massage} key={m.id} pos={pos}/>)
    return (
        <div>
          {MakeNewPost}
        </div>
    )
}
