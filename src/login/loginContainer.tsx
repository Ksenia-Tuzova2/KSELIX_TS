import { connect } from 'react-redux'
import { RootState } from '../redux/store-redux'
import {
  DataType,
  setFetch,
  setUserData
} from '../redux/authReduser'
import { withRouter } from '../content/profile/userInfo/userInfoContainerC'
import { LoginApiC } from './loginApiC'

type MapStateToPropsType = {
  id: number | null,
  email: string | null,
  login: string | null,
  isFetching: boolean,
  isAuth:boolean,
}

type MapDispatchToPropsType = { 
   setFetch: (isFetching: boolean)=>void,
  setUserData: ({id, email, login}:DataType)=>void,
}

export type LoginMapContainerType = MapStateToPropsType&MapDispatchToPropsType

let mapStateToProps = (state: RootState): MapStateToPropsType => {
  return ({
    id: state.authReduser.id,
    email: state.authReduser.email,
    login: state.authReduser.login,
    isFetching: state.authReduser.isFetching,
    isAuth:state.authReduser.isAuth
  }
  )

}

export const LoginContainer = connect(
  mapStateToProps,
  {
    setFetch: setFetch,
    setUserData: setUserData,
  }
)(withRouter(LoginApiC))



