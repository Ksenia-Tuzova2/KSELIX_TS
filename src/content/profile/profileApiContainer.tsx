import React, { useEffect } from 'react'
import { LoadingSpiner } from '../../loadingSpiner/loadingSpiner'
import { getUserData } from '../../redux/profileReducer'
import { useAppDispatch } from '../../redux/store-redux'
import { Profile } from './profile'
import { ProfileContainerType } from './profileContainer'

export const ProfileApiContainer: React.FC<ProfileContainerType> = (props) => {

//должно сработать замыкание , но я не уверена
let userId

const dispatch = useAppDispatch();

  useEffect(() => {

   
     userId = props.router.params.userId
    //не засовываем в диспатч, так как есть контейнерная компонента

    //мы делаем запрос на сервер именно здесь, потому что при монтировании компоненты нам надо увидеть не пустую, а уже заполненную компоненту

    props.setUserProfile(userId)

    props.getStatus(userId)


    dispatch(getUserData(userId))
    //я не уверна что мне это необходимо здесь
    // props.getStatus(userId)
  }, [])


  //не понимаю что тут происходит- от куда берутся пропсы
  const showDownload = () => {
    if (props.isFetching === true) {
      return <LoadingSpiner />
    } else return <></>
  }
  return (
    <div>
      {showDownload()}
      <Profile 
      status={props.status}
       {...props}
        updateStatus={props.updateStatus} 
        userId={userId}/>
    </div>
  )
}




