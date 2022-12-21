import  axios from "axios"
import { v1 } from "uuid"
import { SearchUserC } from "./searchUserC"
import { searchUserMapWindowContainerType } from "./searchUserMapWindowContainer"


export const searchUserMapWindow = ({ users, followUser,unfollowUser,setUser }: searchUserMapWindowContainerType) => {

  if(users.length===0){
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then (Response=>{
      setUser(Response.data.items)
    })
 
  }
  const mapUsersForList = users.map((u) => { return <div key={v1()}><SearchUserC id={u.id} name={u.name} followed={u.followed} followUser={followUser} unfollowUser={unfollowUser} status={null} photos={u.photos}/></div> })



  return (
    <div className='flex'>
      {mapUsersForList}
    </div>
  )
}

// [
// {
//   id: v1(),
//   name: "Ksenia Tuzova",
//   location: 'Saint-Peterburg',
//   followed: false
// }]
