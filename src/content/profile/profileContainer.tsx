
import { connect } from 'react-redux'
import {
  getUserData,
} from '../../redux/profileReducer'
import { RootState } from '../../redux/store-redux'
import { withRouter } from '../../HOC/withRouter'
import { ProfileApiC } from './profileApi'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import {compose} from 'redux'

type MapStateToPropsType = any
// {
//   // profile: any
//   //   isAuth: boolean
//   //   isFetching:boolean
//   any
// }


type MapDispatchToPropsType = {
  setUserProfile: (id: number) => void,
}


export type ProfileContainerType = MapDispatchToPropsType & MapStateToPropsType


let mapStateToProps = (state: RootState): MapStateToPropsType => {
  return ({
    profile: state.profileReducer.profile,
    isAuth: state.authReduser.isAuth,
  }
  )
}




export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps,
    { setUserProfile:getUserData }
  ),
  withRouter
)(ProfileApiC)