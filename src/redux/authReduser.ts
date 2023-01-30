const SET_USER_DATA='SET_USER_DATA'
const SET_FETCH='SET_FETCH'

//не использовать расширение жсх для редьюсеров - могут быть баги


export type AuthInitStateType = {
  id: number|null,
  email: string|null,
  login: string|null,
  isFetching:boolean,
  isAuth:boolean,
}

const SearchUserInitState: AuthInitStateType = {
  id: null,
  email: null,
  login: null,
  isFetching:false,
  isAuth:false,
}

export type DataType={
  id: number,
  email: string,
  login: string,
}



export const authReduser = (state: AuthInitStateType = SearchUserInitState, action: AuthAciontsType): AuthInitStateType => {
  switch (action.type) {
   
  
    case SET_USER_DATA: {
      //мы перезатираем копию инишал стейта новым значением дата - там тоже есть логин айди и все что нужно стейту
      return { ...state, ...action.data , isAuth:true,};
    }
    case SET_FETCH: {
      return { ...state, isFetching:action.isFetching };
    }
    default: {
      return state
    }
  }
}

type AuthAciontsType = ReturnType<typeof setUserData> | ReturnType<typeof setFetch> 

export const setUserData = ({id, email, login}:DataType) => {

  return { type: SET_USER_DATA , data:{id, email, login} } as const
}


export const setFetch = (isFetching: boolean) => {
  return { type: SET_FETCH, isFetching } as const
}

