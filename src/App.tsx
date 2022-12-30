import './null.css'
import s from './App.module.scss';
import React from 'react';
import { Header } from './header/header'
import Footer from './footer/footer';
import { Main } from './main/main';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';


export type AppPropsType={
  // _appState: RootState, 
  // dispatch:(action:any)=>any
}


const App: React.FC<AppPropsType>= () => {
  // debugger

console.log('rerender')
  return (
    <div className={s.App}>

      <Header />
      <Main
      //  appState={appState}
      //  addMassage={addMassage} 
      // dispatch={dispatch}
      //  updateMesText={updateMesText} 
     
      />
      <Footer />
    </div>
  );
}

export default App;
