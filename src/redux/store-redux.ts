import { legacy_createStore as createStore, combineReducers, Store} from 'redux'
import { applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { messegeReducer } from './messegeReduser'
import { profileReducer} from './profileReducer'


 const redusersPack=combineReducers({
 messegeReducer,
  profileReducer,
})

export type RootState = ReturnType<typeof redusersPack>

export let store: Store<RootState> = createStore(redusersPack, applyMiddleware(thunk))

//@ts-ignore
window.store = store