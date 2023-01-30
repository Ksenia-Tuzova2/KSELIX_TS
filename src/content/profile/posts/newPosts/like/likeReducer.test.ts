import { useReducer } from "react"
import { LikeActionType, likeReducer } from "./like"

test('reducer should increese value of likes',()=>{
    //data
    let state=2
    //action
const newState=likeReducer(state,{ type: "LIKE" })
    //expect 
    expect(newState).toBe(3)
})

