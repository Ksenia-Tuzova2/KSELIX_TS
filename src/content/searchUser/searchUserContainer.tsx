
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  followUser,
  SearchUserInitStateType,
  setCurrentPage,
  setFetch,
  setTotalCount,
  setUser,
  unfollowUser,
  UserType
} from '../../redux/searchUserReduser'
import { RootState } from '../../redux/store-redux'
import { SearchUserApiC } from './SearchUserApiC'



type MapStateToPropsType = SearchUserInitStateType


type MapDispatchToPropsType = {
  followUser: (id: number) => void,
  unfollowUser: (id: number) => void,
  setUser: (items: SearchUserInitStateType) => void,
  setCurrentPage: (currentPage: number) => void,
  setTotalCount: (totalCount: number) => void,
  setFetching: (isFetching: boolean) => void,

}


export type searchUserMapWindowContainerType = MapDispatchToPropsType & MapStateToPropsType


let mapStateToProps = (state: RootState): MapStateToPropsType => {
  // console.log(state.searchUserReduser.totalCount);

  return ({
    items: state.searchUserReduser.items,
    pageSize: state.searchUserReduser.pageSize,
    totalCount: state.searchUserReduser.totalCount,
    currentPage: state.searchUserReduser.currentPage,
    isFetching: state.searchUserReduser.isFetching,
  }
  )

}


// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//   return {
//     followUser: (id: number) => dispatch(followUser(id)),
//     unfollowUser: (id: number) => dispatch(unfollowUser(id)),
//     setUser: (items: SearchUserInitStateType) => dispatch(setUser(items)),
//     setCurrentPage: (currentPage: number) => dispatch(setCurrentPage(currentPage)),
//     setTotalCount: (totalCount: number) => dispatch(setTotalCount(totalCount)),
//     setFetching: (isFetching: boolean) => dispatch(setFetch(isFetching)),
//   }
// }


export const SearchUserContainer = connect(mapStateToProps,
  {
    followUser:followUser,
    unfollowUser: unfollowUser,
    setUser:setUser,
    setCurrentPage: setCurrentPage,
    setTotalCount: setTotalCount,
    setFetching:setFetch,
  }
)(SearchUserApiC)

