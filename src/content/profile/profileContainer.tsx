
import { connect } from 'react-redux'
import {
  
  getStatusThunk,
  getUserData,
  updateStatusThunk,
} from '../../redux/profileReducer'
import { RootState } from '../../redux/store-redux'
import { withRouter } from '../../HOC/withRouter'
import { ProfileApiContainer } from './profileApiContainer'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import {compose} from 'redux'

type MapStateToPropsType = {
  profile: any,
  isAuth: boolean,
  status:string,
}


type MapDispatchToPropsType = {
  setUserProfile: (id: number) => void,
  getStatus: (id: number) => void,
  updateStatus: (status:string) => void,
}


export type ProfileContainerType = MapDispatchToPropsType & MapStateToPropsType&any


let mapStateToProps = (state: RootState): MapStateToPropsType => {
  return ({
    profile: state.profileReducer.profile,
    isAuth: state.authReduser.isAuth,
    status:state.profileReducer.status
  }
  )
}




export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps,
    {
       setUserProfile:getUserData,
       getStatus:getStatusThunk,
       updateStatus:updateStatusThunk,
    }
  ),
  withRouter
)(ProfileApiContainer)