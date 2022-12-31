
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {
  followUserActionCreator,
  SearchUserInitStateType,
  setUserActionCreator,
  unfollowUserActionCreator,
  UserType
} from '../../redux/searchUserReduser'
import {RootState} from '../../redux/store-redux'
import { SearchUserMapWindowC } from './searchUserCMap'


type MapStateToPropsType=SearchUserInitStateType


// {
//   items:Array<UserType>
//   pageSize:number,
//   totalCount:number
// }


type MapDispatchToPropsType={
  followUser:(id:number)=>void,
  unfollowUser:(id:number)=>void,
  setUser:(items:SearchUserInitStateType)=>void,
}


export type searchUserMapWindowContainerType=MapDispatchToPropsType&MapStateToPropsType


let mapStateToProps=(state:RootState):MapStateToPropsType=>{
  // console.log(state.searchUserReduser.totalCount);
  
  return({items:state.searchUserReduser.items,
    pageSize:state.searchUserReduser.pageSize,
    totalCount:state.searchUserReduser.totalCount,
    currentPage:state.searchUserReduser.currentPage}
    )

}


let mapDispatchToProps=(dispatch:Dispatch):MapDispatchToPropsType=>{
  return{
    followUser:(id:number)=>dispatch(followUserActionCreator(id)),
    unfollowUser:(id:number)=>dispatch(unfollowUserActionCreator(id)),
    setUser:(items:SearchUserInitStateType)=>dispatch(setUserActionCreator(items))
  }
  }


export const SearchUserContainer=connect(mapStateToProps,mapDispatchToProps)(SearchUserMapWindowC)

