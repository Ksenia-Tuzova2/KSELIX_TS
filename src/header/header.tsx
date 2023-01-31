import HeaderStyle from './header.module.scss'
import React, { useEffect, useState } from 'react'
import Logo from './logo/logo'
import Avatar from './avatar/avatar'
import btnStyle from '../btn.module.scss'
import { Link } from 'react-router-dom'
import { Time } from '../content/profile/posts/newPosts/time'




export const Header:React.FC = () => {
  return (
    <header className={HeaderStyle.Header}>
      <Logo />
      <div className={HeaderStyle.Flexgrow}></div>
      <Avatar />

      <Time/>
      <Link className={btnStyle.btn} to='/auth/'>come in</Link>

   
    </header>
  );
};



