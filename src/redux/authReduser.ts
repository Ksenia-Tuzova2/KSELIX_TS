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

type ActionType = {
  data: DataType
  type:string
  id: number,
  email: string,
  login: string,
  isFetching:boolean,
  isAuth:boolean,
}

export const authReduser = (state: AuthInitStateType = SearchUserInitState, action: ActionType): AuthInitStateType => {
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

export const setUserData = ({id, email, login}:DataType) => {
  let data
  return { type: SET_FETCH, data:{id, email, login} }
}


export const setFetch = (isFetching: boolean) => {
  return { type: SET_USER_DATA, isFetching }
}

