import './null.css'
import style from './App.module.scss';
import React, { useEffect } from 'react';
import { Header } from './header/header'
import Footer from './footer/footer';
import { Main } from './main/main';
import { authUserDataRequest, setUserData } from './redux/authReduser';

export type AppPropsType = {}

const App: React.FC<AppPropsType> = () => {
  // debugger



  useEffect(() => {
    authUserDataRequest()
  },[])

  console.log('rerender')
  return (
    <div className={style.App}>

      <Header />
      <Main/>
      <Footer />
   
    </div>
  );
}

export default App