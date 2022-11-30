import PhotoStyle from './userPhoto.module.scss'
import userPhoto from '../../../../img/myphoto.jpg'
import React from 'react'
const UserPhoto:React.FC=({})=>{
    return(
        <div className={PhotoStyle.content__userPhoto}><a href="#"><img className={PhotoStyle.img} src={userPhoto} alt="" /></a></div>
    )
}
export default UserPhoto