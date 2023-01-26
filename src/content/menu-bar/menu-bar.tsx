import React from 'react'
import styleMenuBar from './menu-bar.module.scss'
import box from '../../box.module.scss'

import ProfileIcon from './icons-menu-bar/cil_hamburger-menu.svg'

import MassageIcon from './icons-menu-bar/carbon_email.svg'
import FriendsIcon from './icons-menu-bar/iconoir_group.svg'
import NewsIcon from './icons-menu-bar/icon_news.svg'
import MusicIcon from './icons-menu-bar/icon_music.svg'
import SettingIcon from './icons-menu-bar/cil_settings.svg'
import {  Link } from 'react-router-dom'
import { RootState } from '../../redux/store-redux'
import { useSelector } from 'react-redux'




const MenuBar:React.FC= () => {

    const meId = useSelector<RootState,number>(state => state.authReduser.id as number)



    return (
            <nav className={styleMenuBar.menubar__wrapper+' '+box.box}>
                <ul className={styleMenuBar.menuBar__list}>
                    <li className={styleMenuBar.firstchild}>
                        <Link to={'profile/'+meId}>
                            <img src={ProfileIcon} alt='a'></img>
                        <p>Profile</p>
                        </Link>
                        </li>
                    <li>
                        <Link to='dialogs'>
                        <img src={MassageIcon} alt=''></img>
                        <p>Dialogs</p>
                        </Link>
                        </li>
                    <li>
                        <Link to='friends'><img src={FriendsIcon} alt=''>
                            </img>
                            <p>Friends</p>
                            </Link>
                            </li>
                    <li>
                        <Link to='news'>
                            <img src={NewsIcon} alt='r'></img>
                            <p>News</p>
                            </Link>
                            </li>
                    <li>
                        <Link to='music'><img src={MusicIcon} alt='f'></img>
                        <p>Music</p>
                            </Link>
                            </li>
                    <li>
                        <Link to='SearchUserContainer'>
                        <img src='*' alt='r'></img>
                        <p>Search</p>
                        </Link>
                        </li>
                    <li className={styleMenuBar.lastchild}>
                        <Link to='#'><img src={SettingIcon} alt='e'></img>
                        <p>Settings</p>
                        </Link>
                        </li>
                </ul>
            </nav>
    )
}

export default MenuBar


