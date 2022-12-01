import s from './newPosts.module.scss'
import Avatar from "../../../../header/avatar/avatar"
import Time from './time'
import Like from './like/like'
import Dislike from './dislike/dislike'
import UserName from '../../userInfo/userName/userName'
import { ReactElement } from 'react'
import { deletePostActionCreator } from '../../../../redux/profileReducer'


    
type NewPostsType={
    message:string,
    pos:number,
    id:string,
    dispatch:(action:any)=>ReactElement<any, any> | null
}

const NewPosts:React.FC<NewPostsType>=({message,pos,dispatch,id})=>{

    const deletePostHandler=(id:string)=>{
        dispatch(deletePostActionCreator(id))
    }
 

    return(
        <div className={s.NewPost} key={pos}>
                <Avatar/>
                <div className="Name-time-text">
                    <div className="box">              
                <UserName frstName='Tanya' scndName='Tuzova'/>
                <Time/>
                <button onClick={()=>deletePostHandler(id)}>x</button>
                </div> 
                <div className="Mssage">{message}</div>
                <div className={s.NewPost__likeDislikeWrapper}>
                    <Like  ></Like>
                <div className={s.FlexGrow}></div>
                <Dislike counter=''/>
                </div>
                </div>
        </div>

    )
}



export default NewPosts