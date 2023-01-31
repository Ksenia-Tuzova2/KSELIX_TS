import box from '../../box.module.scss'
import style from './searchUser.module.scss'
import { PhotosType } from '../../redux/searchUserReduser'
import defaultPhoto from '../menu-bar/icons-menu-bar/codicon_account.svg'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

type SearchUserType = {
  followUser: (id: number) => void,
  unfollowUser: (id: number) => void,
  id: number,
  name: string,
  status: null,
  followed: boolean
  photos: PhotosType
}
export class SearchUserC extends React.Component<SearchUserType>{


  onClickFollowHandler = (id: number) => {
    this.props.followUser(id)
  }

  onClickUnFollowHandler = (id: number) => {
    this.props.unfollowUser(id)
  }

  render() {
    return (
      <div className={box.box}>
        <Link to={`/content/profile/${this.props.id}`}>
        <div className={style.flex}>
          {this.props.photos.large == null && this.props.photos.small == null ? 
          <img src={defaultPhoto} alt=''></img> :
           <img src='' alt=''></img>}
          <div className={''}>
            {this.props.name}
            {this.props.followed ?
              <button onClick={() => {

                //для отписки нам нужно сделать делит запрос - он отдает команду эндпоинту- удали нашу подписку 
                //в ответ нам придет статус код - и если все хорошо (0) - то выполняем нашу функцию

                //делит запрос примает два параметра как и гет - эндпоинт и визкреденшлс- права что-то менять

                axios.defaults.withCredentials = true;
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${this.props.id}`,{ withCredentials: true}).then((Response: any) => {
                  if(Response.data.resultCode===0){
                    this.onClickUnFollowHandler(this.props.id)
                  }
                }).catch(
                  (error: string) => {
                    // handle error
                    console.log(error);
                  }
                )


                
              }
            }>unfollow</button> :
              <button onClick={() => {
                //чтобы подписаться нам нужен постзапрос на сервер, который говорит на, держи, мы хотим подписаться, а сервер бы ответил, хорошо, ты подписан

                //обрати внимание, что здесь принимаются три параметра в запросе - эндпоинт, пустой массив и визкреденшлс- с правами админа что-то менять
                axios.defaults.withCredentials = true;
                axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${this.props.id}`,{},{ withCredentials: true}).then((Response: any) => {
                  // debugger
                  this.onClickFollowHandler(this.props.id)
                }).catch(
                  (error: string) => {
                    // handle error
                    console.log(error);
                  }
                )
               
              }
            }>follow</button>
            }
          </div>
        </div>
        </Link>
      </div>

    )
  }
}

