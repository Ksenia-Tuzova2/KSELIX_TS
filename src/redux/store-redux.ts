import { legacy_createStore as createStore, combineReducers, Store } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { messegeReducer } from './messegeReduser'
import { profileReducer } from './profileReducer'
import { searchUserReduser } from './searchUserReduser'

const redusersPack = combineReducers({
  messegeReducer,
  profileReducer,
  searchUserReduser,
})

export type RootState = ReturnType<typeof redusersPack>

//создаем стор при помощи редакса
export let store: Store<RootState> = createStore(redusersPack, applyMiddleware(thunk))

//@ts-ignore
window.store = store