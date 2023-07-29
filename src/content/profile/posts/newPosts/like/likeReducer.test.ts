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

test ('reducer should increese value of likes on time from one click ',()=>{
    //data
    let state=3
    const newState=likeReducer(state,{type:"LIKE"})

    //expect 
    expect(newState).toBe(4)
})

