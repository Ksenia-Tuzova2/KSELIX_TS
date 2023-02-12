import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getUserData, ProfileTrueType, ProfileType, setUserProfile } from '../../../redux/profileReducer'
import { RootState, useAppDispatch } from '../../../redux/store-redux'
import { withRouter } from '../../../HOC/withRouter'
import { UserInfo } from './userInfo'


type mapStateToPropsType = {
    profile: ProfileType,
    router: any,
    status: string,
    id: number
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileTrueType) => void
}

export type UserInfoContainerType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = {
    status: string,
    updateStatus: (status: string) => void,
    id: number
}



let mapStateToProps = (state: RootState) => ({
    profile: state.profileReducer.profile,

})

//А НУЖЕН ЛИ МНЕ ЭТОТ КОНТЕЙНЕР ИЛИ НЕТ?
//ЧТО ОН ДЕЛАЕТ?
//Я МОГУ УДАЛИТЬ ЭТОТ КОНТЕЙНЕР И ДЕЛЕГИРОВАТЬ ЕГО ОБЯЗАННОСТИ ИМЕНО ПРОФАЙЛ КОНТЕЙНЕРУ
//БОЮСЬ НАГОРОДИТЬ - КОМИТНУ

export const UserInfoContainerC: React.FC<UserInfoContainerType> = (props: any) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        let userId = props.router.params.userId;
        dispatch(getUserData(userId))
    }, []
    )

    return (
        <UserInfo {...props} status={props.status} />
    )

}


export const UserInfoContainer = compose<React.ComponentType<PropsType>>(
    connect(mapStateToProps, {
        setUserProfile
    }
    ),
    withRouter
)(UserInfoContainerC)


// export const UserInfoContainerCforContainerForContainer = connect(mapStateToProps, { setUserProfile })(withRouter(UserInfoContainerCforContainer));



