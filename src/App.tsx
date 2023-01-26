import './null.css'
import style from './App.module.scss';
import React, { useEffect } from 'react';
import { Header } from './header/header'
import Footer from './footer/footer';
import { Main } from './main/main';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData } from './redux/authReduser';

export type AppPropsType = {
  // _appState: RootState, 
  // dispatch:(action:any)=>any
}

const App: React.FC<AppPropsType> = () => {
  // debugger

  //чтобы получить свои данные и прокинуть их потом в профайл мы делаем запрос через юзэффект, который заменяет componentDidMount()
  //так же мы юзаем диспатч из реакт-редакса 
  //диспатч позволяет нам использовать редьюсеры , которые используются только в комбанредьюсере, чтобы далее передать в стор эти функции. Но тут мы можем не вызывать стор(который прокинули через провайдер), используем диспатч- он пробежится по всем редьюсерам и найдет нужный экшн тайп, выполнит его

  //потом мы распутали функции в профайлредьюсере, чтобы все работало,


  const dispatch = useDispatch()

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    
        withCredentials: true
      
    })
      .then((Response: any) => {
        // debugger
        //смотри документацию апишки- 0 значит, что все хорошо -
        //resultCode: required(number)
        // (0 if opearation completed successfullt, other numbers - some error occured)
        if (Response.data.resultCode === 0) {
          let { id, email, login } = Response.data.data
          dispatch(setUserData({ id, email, login })) 
               }
      }).catch((error) => {
        // handle error
        console.log(error);
      }
      )
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


export default App;

//check
