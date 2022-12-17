

export const SearchUser: React.FC<any> = ({
  followUser,
  unfollowUser,
  setUser,
  name,
  followed,
  userId
}) => {

  const onClickFollowHandler = (userId: string ) => {

      followUser(userId)
  

  }

  const onClickUnFollowHandler = (userId: string ) => {
    unfollowUser(userId)
}

  return (
    <div className='' >
      {name}
      {followed?
        <button onClick={() => onClickUnFollowHandler(userId)}> unfollow</button>:
        <button onClick={() => onClickFollowHandler(userId)}> follow</button> }
    </div>
  )
}

