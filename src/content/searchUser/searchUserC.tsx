import Box from '../../box.module.scss'
import Style from './searchUser.module.scss'
import { PhotosType } from '../../redux/searchUserReduser'
import defaultPhoto from '../menu-bar/icons-menu-bar/codicon_account.svg'
import React from 'react'

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
      <div className={Box.Box}>
        <div className={Style.flex}>
          {this.props.photos.large == null && this.props.photos.small == null ? <img src={defaultPhoto} alt=''></img> : <img src='' alt=''></img>}
          <div className={''}>
            {this.props.name}
            {this.props.followed ?
              <button onClick={() => this.onClickUnFollowHandler(this.props.id)}>unfollow</button> :
              <button onClick={() => this.onClickFollowHandler(this.props.id)}>follow</button>
            }
          </div>
        </div>
      </div>

    )
  }
}

