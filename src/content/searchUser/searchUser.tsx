

export const SearchUser: React.FC<any> = ({
  followUser,
  unfollowUser,
  name,
  followed,
  userId
}) => {

  const onClickFollowHandler = (userId: string) => {
    followUser(userId)
  }

  const onClickUnFollowHandler = (userId: string) => {
    unfollowUser(userId)
  }

  return (
    <div>
      {name}
      {followed ?
        <button onClick={() => onClickUnFollowHandler(userId)}> unfollow</button> :
        <button onClick={() => onClickFollowHandler(userId)}> follow</button>}
    </div>
  )
}

