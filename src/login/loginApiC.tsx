import axios from 'axios'
import React from 'react'
import { LoadingSpiner } from '../loadingSpiner/loadingSpiner'
import { Login } from './login'
import { LoginMapContainerType } from './loginContainer'


export class LoginApiC extends React.Component<LoginMapContainerType>{


  //ПЕРЕНЕСЛИ ЭТО В АПП ПРИ ПОМОЩИ ЮЗЭФФЕКТ


  // componentDidMount(): void {

  //   //withCredentials говорит серверу о том, что хотим отправить на сервер гет запрос с кукой
  //   axios.defaults.withCredentials = true;
  //   axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    
  //       withCredentials: true
      
  //   })
  //     .then((Response: any) => {
  //       // debugger
  //       //смотри документацию апишки- 0 значит, что все хорошо -
  //       //resultCode: required(number)
  //       // (0 if opearation completed successfullt, other numbers - some error occured)
  //       if (Response.data.resultCode === 0) {
  //         let { id, email, login } = Response.data.data
  //         this.props.setUserData({ id, email, login })
  //       }
  //     }).catch((error) => {
  //       // handle error
  //       console.log(error);
  //     }
  //     )
  // }

  render() {

    const showDownload = () => {
      if (this.props.isFetching === true) {
        return <LoadingSpiner />
      } else return <></>
    }
    return (
      <div>
        {showDownload()}
        <Login {...this.props} />
      </div>
    )
  }


}

