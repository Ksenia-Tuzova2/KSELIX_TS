import UserInfoCity from "./userInfoCityEducation/userInfoCity"
import UserInfoEducation from "./userInfoCityEducation/userInfoEducation"
import UserPhoto from "./userPhoto/userPhoto"
import ProfileStyle from '../profile.module.scss'
import UserName from "./userName/userName"
import UserStatus from "./userStatus/userStatus"
import box from '../../../box.module.scss'
import { UserInfoContainerType } from "./userInfoContainerC"



export const UserInfo=({setUserProfile,profile}:UserInfoContainerType)=>{
    return(
      
      <div>
         <div className={ProfileStyle.Profile+' '+box.box}>
           <UserPhoto/>
              <div className={ProfileStyle.Profile__userInfo}>
              <UserName fullName={profile?.fullName} />
              <UserStatus/>
                  <ul className="userInfo-list">
                  <UserInfoCity  city={''}/>
                  <UserInfoEducation nameOfOrg='' ></UserInfoEducation>
                  </ul>
              </div>
            
      </div>
      </div>
    )
}