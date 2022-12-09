import s from './newPosts.module.scss'
import Avatar from "../../../../header/avatar/avatar"
import Time from './time'
import Like from './like/like'
import Dislike from './dislike/dislike'
import UserName from '../../userInfo/userName/userName'
import { ReactElement } from 'react'
import { deletePostActionCreator } from '../../../../redux/profileReducer'
import NewPosts from './newPosts'

type NewPostsType = {
    message:string,
    pos:number,
    id:string,
    dispatch:(action:any)=>ReactElement<any, any> | null
}

export const NewPostsContainer: React.FC<NewPostsType> = ({message,pos,id, dispatch}) => {
  
           

            const deletePostHandler = (id: string) => {
                dispatch(deletePostActionCreator(id))
            }


            return (
                <NewPosts message={message} pos={pos} id={id} deletePost={deletePostHandler} />
            )
        }