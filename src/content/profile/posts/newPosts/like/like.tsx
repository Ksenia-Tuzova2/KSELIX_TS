import LikeStyle from './like.module.scss'
import LikeIcon from './like.svg'
import React, { useReducer, useState } from "react";

export const likeReducer = (state: number, action: LikeActionType) => {
    switch (action.type) {
        case LIKE:
            return ++state
    }
}
const LIKE = "LIKE"

export type LikeActionType = {
    type: "LIKE",

}

const Like = () => {


    //тренировка на useReducer
 

   

    let [state, setState] = useReducer(likeReducer, 0)

    return (

        <button className={LikeStyle.Like__btn} onClick={() => setState({ type: LIKE })}>
            <img src={LikeIcon} alt="" />
            <div className="">{state}</div>
        </button>


    )
}


export default Like