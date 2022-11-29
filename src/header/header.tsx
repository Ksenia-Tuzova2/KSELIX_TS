import HeaderStyle from './header.module.scss'
import React from 'react'
import Logo from './logo/logo'
import Avatar from './avatar/avatar'
import BtnStyle from '../btn.module.scss'
import { Link } from 'react-router-dom'




export const Header:React.FC = () => {
  return (
    <header className={HeaderStyle.Header}>
      <Logo />
      <div className={HeaderStyle.Flexgrow}></div>
      <Avatar />
      <Link className={BtnStyle.Btn} to='/content' >come in</Link>

    
    </header>
  );
};



