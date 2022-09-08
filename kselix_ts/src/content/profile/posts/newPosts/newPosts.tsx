import s from './newPosts.module.scss'
import Avatar from "../../../../header/avatar/avatar"
import Time from './time'
import Like from './like/like'
import Dislike from './dislike/dislike'
import UserName from '../../userInfo/userName/userName'


    
type NewPostsType={
    massage:any,
    pos:number,
    id:string,
    deletePost:(id:string)=>void
}

const NewPosts:React.FC<NewPostsType>=({massage,pos,deletePost,id})=>{


    return(
        <div className={s.NewPost} key={pos}>
                <Avatar/>
                <div className="Name-time-text">
                    <div className="box">              
                <UserName frstName='Tanya' scndName='Tuzova'/>
                <Time/>
                <button onClick={()=>deletePost(id)}>x</button>
                </div> 
                <div className="Massage">{massage}</div>
                <div className={s.NewPost__likeDislikeWrapper}>
                    <Like counter='1' pos={pos} ></Like>
                <div className={s.FlexGrow}></div>
                <Dislike counter=''/>
                </div>
                </div>
        </div>

    )
}



export default NewPosts