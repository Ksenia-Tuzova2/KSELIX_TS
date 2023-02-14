import { useDispatch } from 'react-redux'
import { legacy_createStore as createStore, combineReducers, Store } from 'redux'
import { applyMiddleware } from 'redux'
import { reducer } from 'redux-form'
import thunk from 'redux-thunk'
import { authReduser } from './authReduser'
import { messegeReducer } from './messegeReduser'
import { profileReducer } from './profileReducer'
import { searchUserReduser } from './searchUserReduser'

const redusersPack = combineReducers({
  messegeReducer,
  profileReducer,
  searchUserReduser,
  authReduser,
  form:reducer
})

export type RootState = ReturnType<typeof redusersPack>



//создаем стор при помощи редакса
export let store: Store<RootState> = createStore(redusersPack, applyMiddleware(thunk))


export type AppDispatch = typeof store.dispatch;

//делаем юзаппдиспатч, чтобы была возможность прокидывать 
//через диспатч санку, которая затем уже делает запрос 
//если в местах с контейнерными компонентами используем мапдиспатч ту пропс
//который автоматом оборачивает функцию диспатчем, то в определенных местах 
//нам нужно такой апп диспатч
export const useAppDispatch=()=>useDispatch<any>();

//@ts-ignore
window.store = store