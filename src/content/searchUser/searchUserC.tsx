import box from '../../box.module.scss'
import style from './searchUser.module.scss'
import { FollowingInProgressType, PhotosType } from '../../redux/searchUserReduser'
import defaultPhoto from '../menu-bar/icons-menu-bar/codicon_account.svg'
import React from 'react'
import { Link } from 'react-router-dom'
import { searchUserApi } from '../../api/searchUserApi'

type SearchUserType = {
  followUser: (id: number) => void,
  unfollowUser: (id: number) => void,
  id: number,
  name: string,
  status: null,
  followed: boolean
  photos: PhotosType
  setFetchForFollowUserCallBack: (bool: boolean) => void,
  isFetching: boolean
  followingInProgress:FollowingInProgressType
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

                this.props.setFetchForFollowUserCallBack(true)
                //вынесли запрос в папку апи
                searchUserApi.unfollowUserRequest(this.props.id).then((data: any) => {
                  console.log(data);

                  if (data.resultCode === 0) {
                    this.onClickUnFollowHandler(this.props.id)
                  }
                  this.props.setFetchForFollowUserCallBack(false)
                }).catch(
                  (error: string) => {
                    // handle error
                    console.log(error);
                  }
                )


              }
              }>unfollow</button>
              :
              <button
                disabled={this.props.followingInProgress.isFetching}
                onClick={() => {

                  this.props.setFetchForFollowUserCallBack(true)
                  searchUserApi.followUserRequest(this.props.id).then((data: any) => {
                    // debugger
                    //респонс является датой, так как мы отдаем в апи функции респонс.дата

                    if (data.resultCode === 0) {
                      this.onClickFollowHandler(this.props.id)
                    }

                    this.props.setFetchForFollowUserCallBack(false)
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

      </div>

    )
  }
}

