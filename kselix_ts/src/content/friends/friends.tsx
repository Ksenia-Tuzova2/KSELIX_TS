import FriendsStyle from './friends.module.scss'
import React from 'react'
import Friend from './friend/friend'

export const Friends=(props: any)=>{
    return(
        <div className={FriendsStyle.Friends}>
            <Friend friendName='Stanislav Borsch'/>
        </div>

    )
}


