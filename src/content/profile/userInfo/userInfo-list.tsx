import UserInfoCity from "./userInfoCityEducation/userInfoCity"
import UserInfoEducation from "./userInfoCityEducation/userInfoEducation"
import React from 'react'
import UserPhoto from "./userPhoto/userPhoto"
import ProfileStyle from '../profile.module.scss'
import UserName from "./userName/userName"
import UserStatus from "./userStatus/userStatus"
import Box from '../../../box.module.scss'


export const UserInfo=(props:any)=>{
    return(
      
      <div>
         <div className={ProfileStyle.Profile+' '+Box.Box}>
           <UserPhoto/>
              <div className={ProfileStyle.Profile__userInfo}>
              <UserName frstName='Ksenia' scndName='Tuzova'/>
              <UserStatus/>
                  <ul className="userInfo-list">
                  <UserInfoCity  city='Moscow'/>
                  <UserInfoEducation nameOfOrg='school 1508' ></UserInfoEducation>
                  </ul>
              </div>
            
      </div>
      </div>
    )
}