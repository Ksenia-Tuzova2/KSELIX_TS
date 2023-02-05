
import React, { ComponentType } from "react"
import { connect } from "react-redux"
import {
    Navigate,
} from "react-router-dom"
import { RootState } from "../redux/store-redux"


export interface PropsWithAuthRedirect {
    isAuth: boolean
}

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        isAuth: state.authReduser.isAuth
    }
}


export function withAuthRedirect<T>(Component: ComponentType<T>) {


    function ComponentwithAuthRedirectProp(props: MapStateToPropsType) {

        let { isAuth, ...restProps } = props

        if (!isAuth) {
            return <Navigate to='/auth' />
        } else {
            return (<Component {...restProps as T} isAuth={isAuth} />)


        }
    }

    let connnectContainerForNavigate = connect(mapStateToProps)(ComponentwithAuthRedirectProp)

    return connnectContainerForNavigate
}