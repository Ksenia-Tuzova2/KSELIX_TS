import React  from 'react'
import { connect } from 'react-redux'
import { profileApi } from '../../../api/profileApi'
import { ProfileTrueType, ProfileType, setUserProfile } from '../../../redux/profileReducer'
import { RootState } from '../../../redux/store-redux'
import { withRouter } from '../../../withRouter/withRouter'
import { UserInfo } from './userInfo'



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
        
        profileApi.profileDataRequest(userId).then((data:any)=>{
            setUserProfile(data)
        })
    }

    render() {
        
        return (
             <UserInfo {...this.props}/>
             
             )
    }
}


export  const UserInfoContainerCforContainer=connect(mapStateToProps,{setUserProfile})(UserInfoContainerC)





export const UserInfoContainerCforContainerForContainer=connect(mapStateToProps, {setUserProfile})(withRouter(UserInfoContainerCforContainer));