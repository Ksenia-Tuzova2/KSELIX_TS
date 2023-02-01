import box from '../../box.module.scss'
import style from './searchUser.module.scss'
import { PhotosType} from '../../redux/searchUserReduser'
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

        <div className={style.flex}>
          <Link to={`/content/profile/${this.props.id}`}>
            {this.props.photos.large == null && this.props.photos.small == null ?
              <img src={defaultPhoto} alt=''></img> :
              <img src='' alt=''></img>}
          </Link>
          <div className={''}>
            {this.props.name}
            {this.props.followed ?

              <button onClick={() => {

                //вынесли запрос в папку апи
                searchUserApi.unfollowUserRequest(this.props.id).then((data: any) => {
                  if (data.resultCode === 0) {
                    this.onClickUnFollowHandler(this.props.id)
                  }
                }).catch(
                  (error: string) => {
                    // handle error
                    console.log(error);
                  }
                )

              }
              }>unfollow</button>
              :
              <button onClick={() => {
                searchUserApi.followUserRequest(this.props.id).then((data:any) => {
                  // debugger
                  //респонс является датой, так как мы отдаем в апи функции респонс.дата
                  if (data.resultCode === 0) {
                    this.onClickFollowHandler(this.props.id)
                  }
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

