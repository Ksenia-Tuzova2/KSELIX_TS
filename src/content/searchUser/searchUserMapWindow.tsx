import  axios from "axios"
import { v1 } from "uuid"
import { SearchUser } from "./searchUser"
import { searchUserMapWindowContainerType } from "./searchUserMapWindowContainer"

export type SearchUsertype={
  "id": number,
  "photos": {
    "small": null,
    "large": null
  },
  "status": null,
  "followed": boolean

}
export const searchUserMapWindow = ({ users, followUser,unfollowUser,setUser }: searchUserMapWindowContainerType) => {



  if(users.length===0){
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then (Response=>{
      // debugger
      setUser(Response.data.items)
    })
 
  }
  const mapUsersForList = users.map((u) => { return <div key={v1()}><SearchUser userId={u.userId} name={u.name} followed={u.followed} followUser={followUser} unfollowUser={unfollowUser} status={null}/></div> })



  return (
    <div className='flex'>
      {mapUsersForList}
    </div>
  )
}

// [
//    {
//   userId: v1(),
//   name: "Ksenia Tuzova",
//   location: 'Saint-Peterburg',
//   followed: false
// },
// {
//   userId: v1(),
//   name: "Ksenia Tuzova",
//   location: 'Saint-Peterburg',
//   followed: false
// },
// {
//   userId: v1(),
//   name: "Ksenia Tuzova",
//   location: 'Saint-Peterburg',
//   followed: false
// }]
