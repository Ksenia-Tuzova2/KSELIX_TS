import {searchUserMapWindowC} from "./searchUserMapWindowC"
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {
  followUserActionCreator,
  setUserActionCreator,
  unfollowUserActionCreator,
  UserType
} from '../../redux/searchUserReduser'
import {RootState} from '../../redux/store-redux'


type MapStateToPropsType={
  users:Array<UserType>
}


type MapDispatchToPropsType={
  followUser:(id:number)=>void,
  unfollowUser:(id:number)=>void,
  setUser:(users:Array<UserType>)=>void
}


export type searchUserMapWindowContainerType=MapDispatchToPropsType&MapStateToPropsType


let mapStateToProps=(state:RootState):MapStateToPropsType=>{
  return({users:state.searchUserReduser.users})

}


let mapDispatchToProps=(dispatch:Dispatch):MapDispatchToPropsType=>{
  return{
    followUser:(id:number)=>dispatch(followUserActionCreator(id)),
    unfollowUser:(id:number)=>dispatch(unfollowUserActionCreator(id)),
    setUser:(users:Array<UserType>)=>dispatch(setUserActionCreator(users))
  }
  }


export const SearchUserMapWindowContainer=connect(mapStateToProps,mapDispatchToProps)(searchUserMapWindowC)

