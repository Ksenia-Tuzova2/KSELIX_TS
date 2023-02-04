import box from '../../box.module.scss'
import style from './searchUser.module.scss'
import { FollowingInProgressType, PhotosType } from '../../redux/searchUserReduser'
import defaultPhoto from '../menu-bar/icons-menu-bar/codicon_account.svg'
import React from 'react'
import { Link } from 'react-router-dom'

type SearchUserType = {
  followUser: (id: number) => void,
  unfollowUser: (id: number) => void,
  id: number,
  name: string,
  status: null,
  followed: boolean,
  photos: PhotosType,
  followingInProgress: FollowingInProgressType
}
export class SearchUserC extends React.Component<SearchUserType>{


  onClickFollowHandler = (id: number) => {
    this.props.followUser(id)
  }

  onClickUnFollowHandler = (id: number) => {
    this.props.unfollowUser(id)
  }

  render() {
    console.log(this.props.followingInProgress);

    return (
      <div className={box.box}>

        <div className={style.flex}>
          <Link to={`/content/profile/${this.props.id}`}>
            {this.props.photos.large == null && this.props.photos.small == null ?
              <img src={defaultPhoto} alt=''></img> :
              <img src='' alt=''></img>}
          </Link>
          <div className={''}>
            {this.props.name}
            {this.props.followed ?

              <button disabled={this.props.followingInProgress.isFetching} onClick={() => {
                //вся громоздкая логика теперь лежит в редьюсере
                this.props.unfollowUser(this.props.id)
              }
              }>unfollow</button>
              :
              <button
                disabled={this.props.followingInProgress.isFetching}
                onClick={() => {
                  //вся громоздкая логика теперь лежит в редьюсере
                  this.props.followUser(this.props.id)
                }
                }>follow</button>
            }
          </div>
        </div>

      </div>

    )
  }
}

