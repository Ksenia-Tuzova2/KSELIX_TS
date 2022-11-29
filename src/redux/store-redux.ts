import { profileReducer} from './profileReducer'
import { messegeReducer} from './messegeReduser'
import { createStoreHook } from 'react-redux'

// export type RootState = ReturnType<typeof store.getState>

let store=createStoreHook()

// let redusersPack=combineReducers({
//   messegeReducer,
//   profileReducer
// })
