import PhotoStyle from './userPhoto.module.scss'
import React from 'react'

type UserPhotoType={
    photo: {
        small: any;
        large: any;
    } | undefined
}
const UserPhoto:React.FC<UserPhotoType>=({photo})=>{
    return(
        <div className={PhotoStyle.content__userPhoto}>
            <a href="#">
                {photo!==undefined||null?
                <img className={PhotoStyle.img}
                 src={photo?.large} 
                 alt="" />:<></>}
                
            </a>
            </div>
    )
}
export default UserPhoto