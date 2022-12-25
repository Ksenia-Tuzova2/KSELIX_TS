import axios from "axios"
import React, { Component, useState } from "react"
import { SearchUserC } from "./searchUserC"
import { searchUserMapWindowContainerType } from "./searchUserMapWindowContainer"
import style from './searchUser.module.scss'

export class searchUserMapWindowC extends React.Component<searchUserMapWindowContainerType>{




  buttonsNumber: number = this.props.totalCount / this.props.pageSize



  mapUsersForList = this.props.users.map((u) => {
    
    if(this.props.users.length===0){

      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(Response => {
        this.props.setUser(Response.data)
  
        console.log(Response.data);
        
      })
  
  
    }
  

    return <div key={u.id}><SearchUserC
      id={u.id}
      name={u.name}
      followed={u.followed}
      followUser={this.props.followUser}
      unfollowUser={this.props.unfollowUser}
      status={null}
      photos={u.photos} /></div>
  })



  render() {


    return (
      <div className='flex'>
        {this.mapUsersForList}
        j
      </div>
    )
  }

}


