import style from './searchUser.module.scss'
import { v1 } from 'uuid'
import { SearchUserC } from './searchUserC'
import { FollowingInProgressType } from '../../redux/searchUserReduser'

type SearchUserType = {
  pageButtonOnClickHandler: (currentPage: number) => void
  items: any,
  followUser: any,
  unfollowUser: any,
  totalCount: number,
  pageSize: number,
  //followingInProgress: Array<number>,
  currentPage: number,
  setFetchForFollowUser: (isFetching: boolean, userId:number) => void,
  isFetching:boolean,
  followingInProgress: FollowingInProgressType[],
}

export let SearchUsersC = ({
  pageButtonOnClickHandler,
  items,
  followUser,
  unfollowUser,
  totalCount,
  pageSize,
  currentPage,
  setFetchForFollowUser,
  isFetching,
  followingInProgress,
}: SearchUserType) => {

  let mapUsersForList = items.map((u: any) => {

    let setFetchForFollowUserCallBack=(bool:boolean)=>{
      setFetchForFollowUser(bool, u.id)
    }


    
    return <div key={u.id}>

      <SearchUserC
        followingInProgress={followingInProgress.find((el) => el.userId ===u.id) || {isFetching: false, userId: u.id}}
        id={u.id}
        name={u.name}
        followed={u.followed}
        followUser={followUser}
        unfollowUser={unfollowUser}
        status={null}
        photos={u.photos}
        setFetchForFollowUserCallBack={setFetchForFollowUserCallBack}
        isFetching={ isFetching}
      />
    </div>
  })

  let showMoreButtonOnClickHandler = () => {

  }

  let buttonsNumber: number = Math.ceil(totalCount / pageSize
  )
  let buttonNumberArr: number[] = []

  let makeButtonsArr = () => {

    let i: number
    for (i = 1; i <= buttonsNumber; i++) {
      buttonNumberArr.push(i)
    }

    if (buttonNumberArr.length > 10) {
      return ([buttonNumberArr[0], buttonNumberArr[1], buttonNumberArr[2], buttonNumberArr[3], '...', buttonNumberArr[buttonNumberArr.length - 1]])
    }
    return buttonNumberArr

  }

  let mapPageButtons = makeButtonsArr().map((el: any) => {
    return <span
      key={v1()}
      onClick={() => pageButtonOnClickHandler(el)}
      className={currentPage === el ? style.selected : ''}>
      {el}
    </span>
  }

  )
  return (
    <div className='flex'>
      {mapUsersForList}
      <button onClick={showMoreButtonOnClickHandler}>show more</button>
      {mapPageButtons}
    </div>

  )

}

