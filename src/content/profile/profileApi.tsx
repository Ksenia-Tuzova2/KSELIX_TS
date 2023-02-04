import React, { useEffect } from 'react'
import { LoadingSpiner } from '../../loadingSpiner/loadingSpiner'
import { Profile } from './profile'
import { ProfileContainerType } from './profileContainer'

export const ProfileApiC :React.FC<ProfileContainerType>=(props)=>{

    useEffect(()=>{
        let userId=props.router.params.userId
        //не засовываем в диспатч, так как есть контейнерная компонента
      props.setUserProfile(userId)
      },[])


  const showDownload = () => {
    if (props.isFetching === true) {
      return <LoadingSpiner/>
    } else return <></>
  }
    return (
      <div>
        {showDownload()}
      <Profile {...props}/>
      </div>
    )
}




