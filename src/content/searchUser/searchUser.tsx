type SearchUserType={
  followUser:(userId:number)=>void,
  unfollowUser:(userId:number)=>void,
  userId:number,
  name: string,
  status: null,
  followed: boolean
}

export const SearchUser: React.FC<SearchUserType> = ({
  followUser,
  unfollowUser,
  name,
  followed,
  userId
}) => {

  const onClickFollowHandler = (userId: number) => {
    followUser(userId)
  }

  const onClickUnFollowHandler = (userId: number) => {
    unfollowUser(userId)
  }

  return (
    <div>
      {name}
      {followed ?
        <button onClick={() => onClickUnFollowHandler(userId)}>unfollow</button> :
        <button onClick={() => onClickFollowHandler(userId)}>follow</button>}
    </div>
  )
}

