import stylePost from './newPosts.module.scss'
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
    deletePost:(id:string)=>void}

const NewPosts:React.FC<NewPostsType>=({message,pos,id,deletePost})=>{

    const deletePostHandler=(id:string)=>{
        deletePost(id)
    }
 
    return(
        <div className={stylePost.newPost} key={pos}>
                <Avatar/>
                <div className="Name-time-text">
                    <div className="box">              
                <UserName frstName='Tanya' scndName='Tuzova'/>
                <Time/>
                <button onClick={()=>deletePostHandler(id)}>x</button>
                </div> 
                <div className="message">{message}</div>
                <div className={stylePost.newPost__likeDislikeWrapper}>
                    <Like></Like>
                <div className={stylePost.flexGrow}></div>
                <Dislike counter=''/>
                </div>
                </div>
        </div>

    )
}



export default NewPosts