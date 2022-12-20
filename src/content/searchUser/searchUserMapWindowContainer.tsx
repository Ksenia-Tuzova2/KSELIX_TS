import { searchUserMapWindow } from "./searchUserMapWindow"
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { followUserActionCreator, setUserActionCreator, unfollowUserActionCreator, UserType } from '../../redux/searchUserReduser'
import { RootState } from '../../redux/store-redux'
import { SearchUser } from './searchUser'


type MapStateToPropsType={
  users:Array<UserType>
}


type MapDispatchToPropsType={
  followUser:(userId:number)=>void,
  unfollowUser:(userId:number)=>void,
  setUser:(users:Array<UserType>)=>void
}


export type searchUserMapWindowContainerType=MapDispatchToPropsType&MapStateToPropsType


let mapStateToProps=(state:RootState):MapStateToPropsType=>{
  return({users:state.searchUserReduser.users})

}


let mapDispatchToProps=(dispatch:Dispatch):MapDispatchToPropsType=>{
  return{
    followUser:(userId:number)=>dispatch(followUserActionCreator(userId)),
    unfollowUser:(userId:number)=>dispatch(unfollowUserActionCreator(userId)),
    setUser:(users:Array<UserType>)=>dispatch(setUserActionCreator(users))
  }
  }


export const SearchUserMapWindowContainer=connect(mapStateToProps,mapDispatchToProps)(searchUserMapWindow)

