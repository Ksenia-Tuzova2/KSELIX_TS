import  axios from "axios"
import React, {Component} from "react"
import { v1 } from "uuid"
import { SearchUserC } from "./searchUserC"
import { searchUserMapWindowContainerType } from "./searchUserMapWindowContainer"


export class searchUserMapWindowC extends React.Component<searchUserMapWindowContainerType>{


componentDidMount(): void {
  
  axios.get('https://social-network.samuraijs.com/api/1.0/users').then (Response=>{
    this.props.setUser(Response.data.items)
  })

}

  mapUsersForList = this.props.users.map((u) => { return <div key={v1()}><SearchUserC id={u.id} name={u.name} followed={u.followed} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} status={null} photos={u.photos}/></div> })


render(){
  return (
    <div className='flex'>
      {this.mapUsersForList}
    </div>
  )
}

}


