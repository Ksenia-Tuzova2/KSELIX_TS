import React from 'react'
import { LoadingSpiner } from '../loadingSpiner/loadingSpiner'
import { Login } from './login'
import { LoginMapContainerType } from './loginContainer'


export const LoginApiC :React.FC<LoginMapContainerType>=(props)=>{

  //ПЕРЕНЕСЛИ гет запрос на аутентификацию  В АПП ПРИ ПОМОЩИ ЮЗЭФФЕКТ

    const showDownload = () => {
       (props.isFetching === true) {
        return <LoadingSpiner />
      } else return <></>
    }

    return (
      <div>
        {showDownload()}
        <Login {...props} />
      </div>
    )
  
}

