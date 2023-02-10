import './null.css'
import style from './App.module.scss';
import React, { useEffect } from 'react';
import { Header } from './header/header'
import Footer from './footer/footer';
import { Main } from './main/main';
import { authUserDataRequest } from './redux/authReduser';
import { useAppDispatch } from './redux/store-redux';

export type AppPropsType = {}

const App: React.FC<AppPropsType> = () => {
  // debugger

//вопрос - почему нельзя использовать это напрямую?
//мы сделали свой диспатч в сторе, который принимает не только экшн, как диспатч из реакта, но и функции тоже
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authUserDataRequest())
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