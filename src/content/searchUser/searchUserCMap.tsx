import { throws } from "assert"
import axios from "axios"
import React, { Component, useState } from "react"
import style from './searchUser.module.scss'
import { SearchUserC } from "./searchUserC"
import { searchUserMapWindowContainerType } from "./searchUserContainer"

export class SearchUserMapWindowC extends React.Component<searchUserMapWindowContainerType>{

  componentDidMount(): void {
    //обратные кавычки для того чтобы записать квери параметр с переменной
    //квери параметры идут после вопросительного хнака и записываются после амперсанта
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( (Response:any) => {
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

  render() {

    let buttonsNumber: number = Math.ceil(this.props.totalCount / this.props.pageSize
)
    let buttonNumberArr: number[]=[]

   let  makeButtonsArr=()=>{
   
      let i:number
      for( i=1;i<=buttonsNumber;i++){
       buttonNumberArr.push(i)
      }

      if(buttonNumberArr.length>10){
        return ([buttonNumberArr[0],buttonNumberArr[1],buttonNumberArr[2],buttonNumberArr[3],'...',buttonNumberArr[buttonNumberArr.length-1] ])
      }
      return buttonNumberArr

    }

    const pageButtonOnClickHandler=(currentPage:number)=>{    
      this.props.setCurrentPage(currentPage)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then( (Response:any) => {
        // debugger
        this.props.setUser(Response.data)
        this.props.setTotalCount(Response.data.totalCount)
      }).catch((error)=> {
        // handle error
        console.log(error);
      }
      )

        }

    let mapPageButtons=makeButtonsArr().map((el:any)=>{ 

      return<span onClick={(e)=>pageButtonOnClickHandler(el)} className={this.props.currentPage===el?style.Selected:''}> {el} </span>}
      
      )
   
    

    return (
      <div className='flex'>
       
        {this.mapUsersForList}
        <button onClick={this.showMoreButtonOnClickHandler}>показать еще</button>
        {mapPageButtons}
      </div>
    )
  }

}


