import { profileReducer} from './profileReducer'

import { legacy_createStore as createStore, combineReducers, Store} from 'redux'
import { applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { messegeReducer } from './messegeReduser'



 const redusersPack=combineReducers({
 messegeReducer,
  profileReducer,
})

export type RootState = ReturnType<typeof redusersPack>

export let store: Store<RootState> = createStore(redusersPack, applyMiddleware(thunk))
console.log(store);

//@ts-ignore
window.store = store