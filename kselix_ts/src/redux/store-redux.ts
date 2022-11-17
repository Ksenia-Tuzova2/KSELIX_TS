import { profileReducer} from './profileReducer'
import { messegeReducer} from './messegeReduser'


let redusersPack=combineReducers({
  messegeReducer,
  profileReducer
})

export let Store=createStore(redusersPack)
function combineReducers(arg0: { messegeReducer: (state: any, action: any) => any; profileReducer: (state: any, action: any) => any }) {
  throw new Error('Function not implemented.')
}

function createStore(redusersPack: void) {
  throw new Error('Function not implemented.');
}