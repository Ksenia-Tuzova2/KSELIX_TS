import React from "react"
import { v1 } from "uuid"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SEARCH_USER = 'SEARCH_USER'

//не использовать расширение жсх для редьюсеров - могут быть баги

type UserType=  {
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
}

export const searchUserReduser = (state: SearchUserInitStateType = SearchUserInitState, action: ActionType): SearchUserInitStateType => {
  switch (action.type) {
    case FOLLOW: {
      return { ...state };
    }
    case UNFOLLOW: {
      return { ...state };
    }
    case SEARCH_USER: {
      return { ...state };
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