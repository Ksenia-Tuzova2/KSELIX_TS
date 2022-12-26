import axios from "axios"
import React, { Component, useState } from "react"
import style from './searchUser.module.scss'
import { SearchUserC } from "./searchUserC"
import { searchUserMapWindowContainerType } from "./searchUserContainer"

export class SearchUserMapWindowC extends React.Component<searchUserMapWindowContainerType>{

  componentDidMount(): void {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then( (Response:any) => {
      // debugger
      this.props.setUser(Response.data)
      
    }).catch((error)=> {
      // handle error
      console.log(error);
    }
    )

  }



  mapUsersForList = this.props.items.map((u:any) => {
    return <div key={u.id}><SearchUserC
      id={u.id}
      name={u.name}
      followed={u.followed}
      followUser={this.props.followUser}
      unfollowUser={this.props.unfollowUser}
      status={null}
      photos={u.photos} /></div>
  })


  showMoreButtonOnClickHandler=()=>{

  }
  
  pageButtonOnClickHandler=()=>{

  }



  buttonsNumber: number = this.props.totalCount / this.props.pageSize

  makeButtonsArr:any=()=>{
    let buttonNumberArr: number[]
    buttonNumberArr=[]
    let i:number
    for( i=0;i<=this.buttonsNumber;i++){
     buttonNumberArr.push(i)
    }
    return buttonNumberArr
  }



  mapPageButtons:any
  
  // =this.makeButtonsArr.map(b=>{return(
  // <button onClick={this.pageButtonOnClickHandler}>{b}</button>)})

  render() {

    return (
      <div className='flex'>
       
        {this.mapUsersForList}
        <button onClick={this.showMoreButtonOnClickHandler}>показать еще</button>
        {this.mapPageButtons}
        {this.makeButtonsArr}

      </div>
    )
  }

}


