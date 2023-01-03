import dialogItemStyle from './dialogItem.module.scss'
import box from '../../../box.module.scss'


export const DialogItem=(props: any)=>{
    return(

        <div className={dialogItemStyle.dialogBar__friendMassage+' '+box.box}>
           
            <a  className={dialogItemStyle.FriendAvatar }href="#"> </a>
                <div>
                    <div className={dialogItemStyle.NameTimeMassageWrapper}>
                <div className={dialogItemStyle.NameTimeWrapper}>
                <div className={dialogItemStyle.FriendName}>{props.name}</div>
                <div className={dialogItemStyle.Time}>{props.time}</div>
                </div>
                     <div className={dialogItemStyle.FriendMassage}>{props.message}</div>
                </div>

            </div>
            
    </div>
   
 
    )
}

