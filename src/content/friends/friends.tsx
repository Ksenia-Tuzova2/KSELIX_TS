import FriendsStyle from './friends.module.scss'
import Friend from './friend/friend'

export const Friends=({})=>{
    
    // const mapFriendsList=((el))
    return(
        <div className={FriendsStyle.Friends}>
            <Friend friendName='Stanislav Borsch'/>
        </div>

    )
}


