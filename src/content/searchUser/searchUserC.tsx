import box from '../../box.module.scss'
import style from './searchUser.module.scss'
import { PhotosType } from '../../redux/searchUserReduser'
import defaultPhoto from '../menu-bar/icons-menu-bar/codicon_account.svg'
import React from 'react'
import { Link } from 'react-router-dom'

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
        <Link to={'/Profile/'+this.props.id}>
        <div className={style.flex}>
          {this.props.photos.large == null && this.props.photos.small == null ? 
          <img src={defaultPhoto} alt=''></img> :
           <img src='' alt=''></img>}
          <div className={''}>
            {this.props.name}
            {this.props.followed ?
              <button onClick={() => this.onClickUnFollowHandler(this.props.id)}>unfollow</button> :
              <button onClick={() => this.onClickFollowHandler(this.props.id)}>follow</button>
            }
          </div>
        </div>
        </Link>
      </div>

    )
  }
}

