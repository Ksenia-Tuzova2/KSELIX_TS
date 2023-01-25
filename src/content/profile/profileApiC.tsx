import axios from 'axios'
import React from 'react'
import { LoadingSpiner } from '../../loadingSpiner/loadingSpiner'
import { Profile } from './profile'
import { ProfileMapWindowContainerType } from './profileContainer'

export class ProfileApiC extends React.Component<ProfileMapWindowContainerType>{

    componentDidMount(): void {
    
      
      let userId=this.props.router.params.userId
      console.log(userId);
        //обратные кавычки для того чтобы записать квери параметр с переменной
        //квери параметры идут после вопросительного знака и записываются после амперсанта
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then((Response: any) => {
          this.props.setUserProfile(Response.data)
        }).catch((error) => {
          // handle error
          console.log(error);
        }
        )
      }

render(){

  const showDownload = () => {
    if (this.props.isFetching === true) {
      return <LoadingSpiner/>
    } else return <></>
  }
    return (
      <div>
        {showDownload()}
      <Profile {...this.props}/>
      </div>
    )
}


}

