import React from 'react'
import style from './menu-bar.module.scss'
import Box from '../../box.module.scss'

import ProfileIcon from './icons-menu-bar/cil_hamburger-menu.svg'

import MassageIcon from './icons-menu-bar/carbon_email.svg'
import FriendsIcon from './icons-menu-bar/iconoir_group.svg'
import NewsIcon from './icons-menu-bar/icon_news.svg'
import MusicIcon from './icons-menu-bar/icon_music.svg'
import SettingIcon from './icons-menu-bar/cil_settings.svg'
import {  Link } from 'react-router-dom'




const MenuBar:React.FC= () => {
    // debugger
    return (
            <nav className={style.menubar__wrapper+' '+Box.Box}>
                <ul className={style.menuBar__list}>
                    <li className={style.firstchild}><Link to='profile'><img src={ProfileIcon} alt='a'></img><p>Profile</p></Link></li>
                    <li><Link to='dialogs'><img src={MassageIcon} alt=''></img><p>Dialogs</p></Link></li>
                    <li><Link to='friends'><img src={FriendsIcon} alt='s'></img><p>Friends</p></Link></li>
                    <li><Link to='news'><img src={NewsIcon} alt='r'></img><p>News</p></Link></li>
                    <li><Link to='music'><img src={MusicIcon} alt='f'></img><p>Music</p></Link></li>
                    <li><Link to='SearchUserContainer'><img src='*' alt='r'></img><p>Search</p></Link></li>
                    <li className={style.lastchild}><a href='#'><img src={SettingIcon} alt='e'></img><p>Settings</p></a></li>
                </ul>
            </nav>
    )
}

export default MenuBar


