import React from 'react'
import styleAvatar from './avatar.module.scss'
import Img from '../../img/myphoto.jpg'

const Avatar = (props: any) => {
    return (
        <div className={styleAvatar.Avatar}>
            <a href='#'>
                <img src={Img} alt="">{props.Img}</img>
            </a>
        </div>
    )
}

export default Avatar