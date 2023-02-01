import './null.css'
import style from './App.module.scss';
import React, { useEffect } from 'react';
import { Header } from './header/header'
import Footer from './footer/footer';
import { Main } from './main/main';
import { useDispatch } from 'react-redux';
import { setUserData } from './redux/authReduser';
import { authApi } from './api/authApi';

export type AppPropsType = {}

const App: React.FC<AppPropsType> = () => {
  // debugger

  //чтобы получить свои данные и прокинуть их потом в профайл
  // мы делаем запрос через юзэффект, который заменяет componentDidMount()
  //так же мы юзаем диспатч из реакт-редакса 
  //диспатч позволяет нам использовать редьюсеры , 
  //которые используются только в комбанредьюсере, 
  //чтобы далее передать в стор эти функции. 
  //Но тут мы можем не вызывать стор(который прокинули через провайдер),
  // используем диспатч- он пробежится по всем редьюсерам
  // и найдет нужный экшн тайп, выполнит его
  //потом мы распутали функции в профайлредьюсере, чтобы все работало,


  const dispatch = useDispatch()

  useEffect(() => {
    
   
    authApi.authRequest().then((data: any) => {
        // debugger
        //смотри документацию апишки- 0 значит, что все хорошо -
        //resultCode: required(number)
        // (0 if opearation completed successfullt, other numbers - some error occured)
        if (data.resultCode === 0) {
          let { id, email, login } = data.data
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

export default App