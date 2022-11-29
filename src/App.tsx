import './null.css'
import s from './App.module.scss';
import React from 'react';
import { Header } from './header/header'
import Footer from './footer/footer';
import { Main } from './main/main';
import { StateType } from './redux/store';

export type AppPropsType={
  appState: StateType, 
  // deletePost:(id:string)=>void
  // addMassage:(message: string) => void, 
  // addPost: (newtext: string) => void,
  // updateNewPostText:(newtext: string) => void, 
  // updateMesText: (newtext: string) => void,
  dispatch:(action:any)=>any
}


const App: React.FC<AppPropsType>= ({ appState,  dispatch,
  }) => {
  // debugger

  return (
    <div className={s.App}>

      <Header />
      <Main appState={appState}
      //  addMassage={addMassage} 
      dispatch={dispatch}
      //  updateMesText={updateMesText} 
     
      />
      <Footer />
    </div>
  );
}

export default App;

//так, я хочу круговорот флакса на каждый символ 
//открытие- важна последовательность когда прокидываешь пропсы