import React from "react"

const SHOW_FRIEND_PROFILE='SHOW_FRIEND_PROFILE'
const OPEN_CHAT_WITH_FRIEND='OPEN_CHAT_WITH_FRIEND'


//не использовать расширение жсх для редьюсеров - могут быть баги

type FriendsInitStateType={}
const friendsInitState: FriendsInitStateType = {
chats:[]
}

type ActionType={
  type:string,
  friendId:string
}

export const friendsReduser = (state: FriendsInitStateType = friendsInitState, action: ActionType):FriendsInitStateType => {
    switch (action.type) {
      
      case SHOW_FRIEND_PROFILE:{
        return {...state}; 
      }

      case OPEN_CHAT_WITH_FRIEND:{
        return {...state}; 
      }
  
      default: {
        return state
      }
    } 
 

}

export const showFriendProfile = (message: string) => {
	return { type: SHOW_FRIEND_PROFILE, message }
}

export const updateMesText = (newtext: string) => {
	return { type: OPEN_CHAT_WITH_FRIEND, newtext }
}