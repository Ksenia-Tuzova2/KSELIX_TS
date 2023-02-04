
import { connect } from 'react-redux'
import {
  getUserData,
} from '../../redux/profileReducer'
import { RootState } from '../../redux/store-redux'
import { withRouter } from '../../withRouter/withRouter'
import { ProfileApiC } from './profileApi'

type MapStateToPropsType = any


type MapDispatchToPropsType = {
  setProfile: (id: number) => void,
}


export type ProfileContainerType = MapDispatchToPropsType & MapStateToPropsType


let mapStateToProps = (state: RootState): MapStateToPropsType => {
  return ({
    profile: state.profileReducer.profile
  }
  )
}


export const ProfileContainer = connect(mapStateToProps,
  {
   setUserProfile:getUserData
  }
)(withRouter(ProfileApiC) )

