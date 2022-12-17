import { v1 } from "uuid"
import { UserType } from "../../redux/searchUserReduser"
import { SearchUser } from "./searchUser"
import { searchUserMapWindowContainerType } from "./searchUserMapWindowContainer"


export const searchUserMapWindow = ({ users, followUser,unfollowUser,setUser }: searchUserMapWindowContainerType) => {
  const mapUsersForList = users.map((u: UserType) => { return <div key={v1()}><SearchUser userId={u.userId} name={u.name} followed={u.followed} followUser={followUser} unfollowUser={unfollowUser} setUser={setUser}/></div> })



  return (
    <div className='flex'>
      {mapUsersForList}
    </div>
  )
}


