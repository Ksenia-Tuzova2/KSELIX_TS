import './null.css'
import s from './App.module.scss';
import React from 'react';
import { Header } from './header/header'
import Footer from './footer/footer';
import { Main } from './main/main';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { RootState } from './redux/store-redux';

export type AppPropsType={
  appState: RootState, 
  dispatch:(action:any)=>any
}


const App: React.FC<AppPropsType>= ({ appState,  dispatch,
  }) => {
  // debugger

//const Dispatch=useDispatch()
//const cash=useSelector(State=>State.cash)
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