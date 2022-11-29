import LikeStyle from './like.module.scss'
import LikeIcon from './like.svg'
import React, { useState } from "react";

const Like = () => {


    let [state, setState] = useState(5)

    return (

        <button className={LikeStyle.Like__btn} onClick={() => setState(state + 1)}>
            <img src={LikeIcon} alt="" />
           <div className="">{state}</div> 
        </button>


    )
}


export default Like