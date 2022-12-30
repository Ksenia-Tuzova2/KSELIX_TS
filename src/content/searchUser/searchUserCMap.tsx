import axios from "axios"
import React, { Component, useState } from "react"
import style from './searchUser.module.scss'
import { SearchUserC } from "./searchUserC"
import { searchUserMapWindowContainerType } from "./searchUserContainer"

export class SearchUserMapWindowC extends React.Component<searchUserMapWindowContainerType>{

  componentDidMount(): void {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( (Response:any) => {
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






  // =this.makeButtonsArr.map(b=>{return(
  // <button onClick={this.pageButtonOnClickHandler}>{b}</button>)})

  render() {

    let buttonsNumber: number = Math.ceil(this.props.totalCount / this.props.pageSize
)
    let buttonNumberArr: number[]=[]

   let  makeButtonsArr:any=()=>{
   
      let i:number
      for( i=0;i<=buttonsNumber;i++){
       buttonNumberArr.push(i)
      }
      return buttonNumberArr
  

    }

    let mapPageButtons=makeButtonsArr().map((el:any)=>{ return<span > {el} </span>})
   
    console.log(mapPageButtons);
    

    return (
      <div className='flex'>
       
        {this.mapUsersForList}
        <button onClick={this.showMoreButtonOnClickHandler}>показать еще</button>
        {mapPageButtons}
      </div>
    )
  }

}


