import UserInfoContacts from "./userInfoCityEducation/userInfoCity"
import UserInfoJob from "./userInfoCityEducation/userInfoEducation"
import UserPhoto from "./userPhoto/userPhoto"
import ProfileStyle from '../profile.module.scss'
import UserName from "./userName/userName"
import {UserStatus }from "./userStatus/userStatus"
import box from '../../../box.module.scss'
import { UserInfoContainerType } from "./userInfoContainerC"



export const UserInfo=({setUserProfile,profile}:UserInfoContainerType)=>{



    return(
      
      <div>
         <div className={ProfileStyle.Profile+' '+box.box}>
           <UserPhoto photo={profile?.photos}/>
              <div className={ProfileStyle.Profile__userInfo}>
              <UserName fullName={profile?.fullName} />
              <UserStatus status={profile?.aboutMe} />
                  <ul className="userInfo-list">
                  <UserInfoContacts  contacts={profile?.contacts}/>
               
                  <UserInfoJob job={profile?.lookingForAJobDescription} ></UserInfoJob>
                  </ul>
              </div>
            
      </div>
      </div>
    )
}