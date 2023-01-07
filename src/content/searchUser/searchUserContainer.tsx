
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  followUserActionCreator,
  SearchUserInitStateType,
  setCurrentPageActionCreator,
  setTotalCountActionCreator,
  setUserActionCreator,
  unfollowUserActionCreator,
  UserType
} from '../../redux/searchUserReduser'
import { RootState } from '../../redux/store-redux'
import { SearchUserApiC } from './SearchUserApiC'


type MapStateToPropsType = SearchUserInitStateType


type MapDispatchToPropsType = {
  followUser: (id: number) => void,
  unfollowUser: (id: number) => void,
  setUser: (items: SearchUserInitStateType) => void,
  setCurrentPage: (currentPage: number) => void
  setTotalCount: (totalCount: number) => void
}


export type searchUserMapWindowContainerType = MapDispatchToPropsType & MapStateToPropsType


let mapStateToProps = (state: RootState): MapStateToPropsType => {
  return ({
    items: state.searchUserReduser.items,
    pageSize: state.searchUserReduser.pageSize,
    totalCount: state.searchUserReduser.totalCount,
    currentPage: state.searchUserReduser.currentPage
  }
  )
}


let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    followUser: (id: number) => dispatch(followUserActionCreator(id)),
    unfollowUser: (id: number) => dispatch(unfollowUserActionCreator(id)),
    setUser: (items: SearchUserInitStateType) => dispatch(setUserActionCreator(items)),
    setCurrentPage: (currentPage: number) => dispatch(setCurrentPageActionCreator(currentPage)),
    setTotalCount: (totalCount: number) => dispatch(setTotalCountActionCreator(totalCount))
  }
}


export const SearchUserContainer = connect(mapStateToProps, mapDispatchToProps)(SearchUserApiC)

