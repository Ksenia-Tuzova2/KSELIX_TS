import Box from '../../box.module.scss'
import Style from './searchUser.module.scss'
import { PhotosType } from '../../redux/searchUserReduser'
import defaultPhoto from '../menu-bar/icons-menu-bar/codicon_account.svg'

type SearchUserType={
  followUser:(id:number)=>void,
  unfollowUser:(id:number)=>void,
  id:number,
  name: string,
  status: null,
  followed: boolean
  photos:PhotosType
}

export const SearchUser: React.FC<SearchUserType> = ({
  followUser,
  unfollowUser,
  name,
  followed,
  id,
  photos
}) => {

  const onClickFollowHandler = (id: number) => {
    followUser(id)
  }

  const onClickUnFollowHandler = (id: number) => {
    unfollowUser(id)
  }

  return (
    <div className={Box.Box}>
      <div className={Style.flex}>
      {photos.large==null&&photos.small==null?<img src={defaultPhoto} alt=''></img>:<img src='' alt=''></img>}
      <div className={''}>
      {name}
      {followed ?
        <button onClick={() => onClickUnFollowHandler(id)}>unfollow</button> :
        <button onClick={() => onClickFollowHandler(id)}>follow</button>}
    </div>
    </div>
    </div>
  )
}

