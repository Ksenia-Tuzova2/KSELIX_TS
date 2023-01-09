import axios from 'axios'
import React, { FC } from 'react'
import { connect } from 'react-redux'
import { ProfileTrueType, ProfileType, setUserProfile } from '../../../redux/profileReducer'
import { RootState } from '../../../redux/store-redux'
import { UserInfo } from './userInfo'
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";



type mapStateToPropsType={
    profile: ProfileType,
    router:any
}

type mapDispatchToPropsType={
    setUserProfile:(profile: ProfileTrueType)=>void
}
export type UserInfoContainerType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps=(state:RootState)=>({
   profile: state.profileReducer.profile,
})



 export class UserInfoContainerC extends React.Component<UserInfoContainerType>{


    
    componentDidMount(): void {
        let userId = this.props.router.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((Responce:any)=>{
            setUserProfile(Responce.data)
        })
    }

    //если это контейнер почему мы не делаем это через коннект? не понятно
    render() {
        
        return (
             <UserInfo {...this.props}/>
             )
    }
}


export  const UserInfoContainerCforContainer=connect(mapStateToProps,{setUserProfile})(UserInfoContainerC)




// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component:any) {
    function ComponentWithRouterProp(props:any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export const UserInfoContainerCforContainerForContainer=connect(mapStateToProps, {setUserProfile})(withRouter(UserInfoContainerCforContainer));