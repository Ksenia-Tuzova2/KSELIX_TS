
import { connect } from 'react-redux'
import {
    setUserProfile

} from '../../redux/profileReducer'
import { RootState } from '../../redux/store-redux'
import { ProfileApiC } from './profileApiC'
import { withRouter } from './userInfo/userInfoContainerC'


type MapStateToPropsType = any


type MapDispatchToPropsType = {
  setProfile: (id: number) => void,
}


export type ProfileMapWindowContainerType = MapDispatchToPropsType & MapStateToPropsType


let mapStateToProps = (state: RootState): MapStateToPropsType => {
  // console.log(state.searchUserReduser.totalCount);

  return ({
    profile: state.profileReducer.profile
  }
  )

}




export const ProfileContainer = connect(mapStateToProps,
  {
   setUserProfile:setUserProfile
  }
)(withRouter(ProfileApiC) )

