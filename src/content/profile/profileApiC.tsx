import axios from 'axios'
import React, { useEffect } from 'react'
import { LoadingSpiner } from '../../loadingSpiner/loadingSpiner'
import { Profile } from './profile'
import { ProfileMapWindowContainerType } from './profileContainer'

export const ProfileApiC :React.FC<ProfileMapWindowContainerType>=(props)=>{

    useEffect(
      ()=>{
    
    console.log('useEffect im profile api');
      
      let userId=props.router.params.userId
      console.log(userId);
        //обратные кавычки для того чтобы записать квери параметр с переменной
        //квери параметры идут после вопросительного знака и записываются после амперсанта
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then((Response: any) => {
          props.setUserProfile(Response.data)
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




