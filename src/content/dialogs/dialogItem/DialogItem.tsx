import dialogItemStyle from './DialogItem.module.scss'
import box from '../../../box.module.scss'

type DialogItemPropsType={
    name:string,
    time:string,
    message:string,
}

export const DialogItem=({name,time,message}: DialogItemPropsType)=>{
    return(

        <div className={dialogItemStyle.dialogBar__friendMessage+' '+box.box}>
           
            <a  className={dialogItemStyle.FriendAvatar }href="#"> </a>
                <div>
                    <div className={dialogItemStyle.nameTimeMessageWrapper}>
                <div className={dialogItemStyle.nameTimeWrapper}>
                <div className={dialogItemStyle.friendName}>{name}</div>
                <div className={dialogItemStyle.time}>{time}</div>
                </div>
                     <div className={dialogItemStyle.friendMessage}>{message}</div>
                </div>

            </div>
            
    </div>
   
 
    )
}

