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

type SearchUsersActionType = ReturnType<typeof setFetch>|ReturnType<typeof followUser>|ReturnType<typeof unfollowUser>|ReturnType<typeof searchUser>|ReturnType<typeof setUser>|ReturnType<typeof setTotalCount>|ReturnType<typeof setCurrentPage>

export const searchUserReduser = (state: SearchUserInitStateType = SearchUserInitState, action: SearchUsersActionType): SearchUserInitStateType => {
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
  return { type: SET_FETCH, isFetching } as const
}

export const followUser = (id: number) => {
  return { type: FOLLOW, id } as const
}

export const unfollowUser = (id: number) => {
  return { type: UNFOLLOW, id } as const
}
export const searchUser = (id: number) => {
  return { type: SEARCH_USER, id } as const
}

export const setUser = (items: SearchUserInitStateType) => {
  return { type: SET_USER, items } as const
}


export const setCurrentPage = (currentPage: number) => {
  return { type: SET_CURRENT_PAGE, currentPage } as const
}

export const setTotalCount = (totalCount: number) => {
  return { type: SET_TOTAL_COUNT, totalCount } as const
}