import React, { useEffect }  from 'react'
import { connect } from 'react-redux'
import { getUserData, ProfileTrueType, ProfileType, setUserProfile } from '../../../redux/profileReducer'
import { RootState, useAppDispatch } from '../../../redux/store-redux'
import { withRouter } from '../../../HOC/withRouter'
import { UserInfo } from './userInfo'


type mapStateToPropsType={
    profile: ProfileType,
    router:any,
    status:string
}

type mapDispatchToPropsType={
    setUserProfile:(profile: ProfileTrueType)=>void
}

export type UserInfoContainerType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps=(state:RootState)=>({
   profile: state.profileReducer.profile,
})

 export const UserInfoContainerC : React.FC<UserInfoContainerType>=(props:any)=>{

    const dispatch = useAppDispatch();
    
    useEffect(()=>{
        let userId = props.router.params.userId;
        dispatch(getUserData(userId))},[]
    )
        
        return (
             <UserInfo {...props} status={props.status}/>
             
             )
    
}


export  const UserInfoContainerCforContainer=connect(mapStateToProps,{setUserProfile})(UserInfoContainerC)





export const UserInfoContainerCforContainerForContainer=connect(mapStateToProps, {setUserProfile})(withRouter(UserInfoContainerCforContainer));