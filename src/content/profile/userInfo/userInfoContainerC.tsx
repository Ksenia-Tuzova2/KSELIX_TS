import React from 'react'
import { UserInfo } from './userInfo'



type UserInfoContainerType = {
   
}
export class UserInfoContainerC extends React.Component<UserInfoContainerType>{

    //если это контейнер почему мы не делаем это через коннект? не понятно
    render() {
        return (
             <UserInfo {...this.props}/>
             )
    }
}

