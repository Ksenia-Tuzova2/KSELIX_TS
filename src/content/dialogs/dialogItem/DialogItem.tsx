import s from './DialogItem.module.scss'
import Box from '../../../box.module.scss'


export const DialogItem=(props: any)=>{
    return(

        <div className={s.dialogBar__friendMassage+' '+Box.Box}>
           
            <a  className={s.FriendAvatar }href="#"> </a>
                <div>
                    <div className={s.NameTimeMassageWrapper}>
                <div className={s.NameTimeWrapper}>
                <div className={s.FriendName}>{props.name}</div>
                <div className={s.Time}>{props.time}</div>
                </div>
                     <div className={s.FriendMassage}>{props.message}</div>
                </div>

            </div>
            
    </div>
   
 
    )
}

