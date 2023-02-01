import React, { useEffect } from 'react'
import { profileApi } from '../../api/profileApi'
import { LoadingSpiner } from '../../loadingSpiner/loadingSpiner'
import { Profile } from './profile'
import { ProfileMapWindowContainerType } from './profileContainer'

export const ProfileApiC :React.FC<ProfileMapWindowContainerType>=(props)=>{

    useEffect(
      ()=>{
    console.log('useEffect im profile api');
      
      let userId=props.router.params.userId
  
        //обратные кавычки для того чтобы записать квери параметр с переменной
        //квери параметры идут после вопросительного знака и записываются после амперсанта
        
       
        profileApi.profileDataRequest(userId).then((data: any) => {
          props.setUserProfile(data)
        }).catch((error) => {
          // handle error
          console.log(error);
        }
        )
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




