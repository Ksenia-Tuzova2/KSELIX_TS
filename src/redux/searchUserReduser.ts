const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SEARCH_USER = 'SEARCH_USER'
const SET_USER = 'SET_USER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT='SET_TOTAL_COUNT'
const SET_FETCH='SET_FETCH'

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
  followed: boolean,

}



export type SearchUserInitStateType = {
  items: Array<UserType>,
  totalCount: number,
  pageSize: number,
  currentPage: number,
  isFetching:boolean,

}

const SearchUserInitState: SearchUserInitStateType = {
  items: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 3,
  isFetching:false,

}

type ActionType = {
  type: string,
  id: number,
  items: SearchUserInitStateType,
  currentPage: number,
  totalCount:number,
  isFetching:boolean,
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
      return { ...state, items: action.items.items, totalCount: action.items.totalCount };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_COUNT: {
      return { ...state, totalCount:action.totalCount}
    }
    case SET_FETCH: {
      return { ...state, isFetching:action.isFetching };
    }
    default: {
      return state
    }
  }


}

export const setFetch = (isFetching: boolean) => {
  return { type: SET_FETCH, isFetching }
}

export const followUser = (id: number) => {
  return { type: FOLLOW, id }
}

export const unfollowUser = (id: number) => {
  return { type: UNFOLLOW, id }
}
export const searchUser = (id: number) => {
  return { type: UNFOLLOW, id }
}

export const setUser = (items: SearchUserInitStateType) => {
  return { type: SET_USER, items }
}


export const setCurrentPage = (currentPage: number) => {
  return { type: SET_CURRENT_PAGE, currentPage }
}

export const setTotalCount = (totalCount: number) => {
  return { type: SET_TOTAL_COUNT, totalCount }
}