import FriendStyle from './friend.module.scss'
import BtnStyle from '../../../btn.module.scss'

type  PropsType={
    friendName:string,
    friendStatus?:string,
}

const Friend=({friendName,friendStatus}: PropsType)=>{

    const onClickHandler=()=>{
        
    }
    return(
    <div className={FriendStyle.Friend}>
        <div className={FriendStyle.Friend__Avatar}><a href=''><img src="" alt="" /></a></div>
        <div className={FriendStyle.Friend__InfoWrapper}>
            <div className={FriendStyle.Friend__Name}>{friendName}</div>
            <div className={FriendStyle.Friend__Status}>{friendStatus}</div>
            <button className={BtnStyle.Btn} onClick={()=>onClickHandler()}>Profile</button>
              <button className={BtnStyle.Btn} onClick={()=>onClickHandler()}>Message</button>
        </div>
   </div>
    
    )
}

export default Friend