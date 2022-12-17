import React from "react"
import { v1 } from "uuid"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SEARCH_USER = 'SEARCH_USER'
const SET_USER='SET_USER'

//не использовать расширение жсх для редьюсеров - могут быть баги

export type UserType=  {
  userId: string,
  name: string,
  location: string,
  followed: boolean
}
type SearchUserInitStateType = {
users:Array<UserType>
}
const SearchUserInitState: SearchUserInitStateType = {
  users: [
    {
      userId: v1(),
      name: "Ksenia Tuzova",
      location: 'Saint-Peterburg',
      followed: false
    },
    {
      userId: v1(),
      name: "Ksenia Tuzova",
      location: 'Saint-Peterburg',
      followed: false
    },
    {
      userId: v1(),
      name: "Ksenia Tuzova",
      location: 'Saint-Peterburg',
      followed: false
    }
  ]
}

type ActionType = {
  type: string,
  userId: string
  users:any 
}

export const searchUserReduser = (state: SearchUserInitStateType = SearchUserInitState, action: ActionType): SearchUserInitStateType => {
  switch (action.type) {
    case FOLLOW: {
      let followUser=state.users.map((u)=>{
    
        if(u.userId===action.userId){
                  // здесь даже не делаем копию, так как мап выплевывает новый массив
          return {...u, followed:true}
       }else {return {...u}}
      })
      console.log('followed');
      
      return { ...state, users: followUser  };
    }
    case UNFOLLOW: {
      const unfollowUser=state.users.map((u)=>{
        if(u.userId===action.userId){
          return {...u, followed:false}
        }else{return{...u}}})
      return { ...state ,
         users: unfollowUser
    }}
    case SEARCH_USER: {
      return { ...state };
    }
    case  SET_USER: {
      return { ...state, users:[...state.users, ...action.users] };
    }
    default: {
      return state
    }
  }


}

export const followUserActionCreator = (userId: string) => {
  return { type: FOLLOW, userId }
}

export const unfollowUserActionCreator = (userId: string) => {
  return { type: UNFOLLOW, userId }
}
export const searchUserActionCreator = (userId: string) => {
  return { type: UNFOLLOW, userId }
}
export const setUserActionCreator = (users:Array<UserType>) => {
  return { type: SET_USER, users}
}