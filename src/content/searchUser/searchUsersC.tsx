import style from './searchUser.module.scss'
import { v1 } from 'uuid'
import { SearchUserC } from './searchUserC'
import { FollowingInProgressType } from '../../redux/searchUserReduser'
import { useState } from 'react'

type SearchUserType = {
  pageButtonOnClickHandler: (currentPage: number) => void
  items: any,
  followUser: any,
  unfollowUser: any,
  totalCount: number,
  pageSize: number,
  currentPage: number,
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
  followingInProgress,
}: SearchUserType) => {

  let mapUsersForList = items.map((u: any) => {

    
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

  let [value, setValue]=useState(1)

 let  onChangeHandler=(number:string)=>{
//@ts-ignore
  setValue(number)
 }

 let onBlurHandler=()=>{
  //@ts-ignore
  pageButtonOnClickHandler(value)
 }

  let mapPageButtons = makeButtonsArr().map((el: any) => {
    return <span
      key={v1()}
      onClick={() => pageButtonOnClickHandler(el)}
      className={currentPage === el ? style.selected : ''}>
       <> {el} </>
    </span>
  }

  )
  return (
    <div className='flex'>
      {mapUsersForList}
      <button onClick={showMoreButtonOnClickHandler}>show more</button>
      {mapPageButtons} 
      <input type='number'
      value={value}
      onBlur={()=>onBlurHandler}
      onChange={(e)=>onChangeHandler(e.currentTarget.value)}/>
    </div>

  )

}

