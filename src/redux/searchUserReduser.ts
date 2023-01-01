const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SEARCH_USER = 'SEARCH_USER'
const SET_USER = 'SET_USER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT='SET_TOTAL_COUNT'

//не использовать расширение жсх для редьюсеров - могут быть баги

export type PhotosType = {
  small: string | null
  large: string | null
}
export type UserType = {

  name: string,
  id: number,
  uniqueUrlName: null | string,
  photos: PhotosType
  status: null,
  followed: boolean
  ,

}



export type SearchUserInitStateType = {
  items: Array<UserType>
  totalCount: number
  pageSize: number,
  currentPage: number

}
const SearchUserInitState: SearchUserInitStateType = {
  items: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 3,
}

type ActionType = {
  type: string,
  id: number,
  items: SearchUserInitStateType,
  currentPage: number
  totalCount:number
}

export const searchUserReduser = (state: SearchUserInitStateType = SearchUserInitState, action: ActionType): SearchUserInitStateType => {
  switch (action.type) {
    case FOLLOW: {
      let followUser = state.items.map((u) => {

        if (u.id === action.id) {
          // здесь даже не делаем копию, так как мап выплевывает новый массив
          return { ...u, followed: true }
        } else { return { ...u } }
      })
      console.log('followed');

      return { ...state, items: followUser };
    }
    case UNFOLLOW: {
      const unfollowUser = state.items.map((u) => {
        if (u.id === action.id) {
          return { ...u, followed: false }
        } else { return { ...u } }
      })
      return {
        ...state,
        items: unfollowUser
      }
    }
    case SEARCH_USER: {
      return { ...state };
    }
    case SET_USER: {
      // debugger
      return { ...state, items: [ ...action.items.items], totalCount: action.items.totalCount };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_COUNT: {
      return { ...state, totalCount:action.totalCount}
    }
    default: {
      return state
    }
  }


}

export const followUserActionCreator = (id: number) => {
  return { type: FOLLOW, id }
}

export const unfollowUserActionCreator = (id: number) => {
  return { type: UNFOLLOW, id }
}
export const searchUserActionCreator = (id: number) => {
  return { type: UNFOLLOW, id }
}

export const setUserActionCreator = (items: SearchUserInitStateType) => {
  return { type: SET_USER, items }
}

export const setCurrentPageActionCreator = (currentPage: number) => {
  return { type: SET_CURRENT_PAGE, currentPage }
}

export const setTotalCountActionCreator = (totalCount: number) => {
  return { type: SET_TOTAL_COUNT, totalCount }
}