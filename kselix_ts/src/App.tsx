import './null.css'
import s from './App.module.scss';
import React from 'react';
import { Header } from './header/header'
import Footer from './footer/footer';
import { Main } from './main/main';
import { StateType } from './redux/store';

export type AppPropsType={
  appState: StateType, 
  deletePost:(id:string)=>void
  addMassage:(message: string) => void, 
  addPost: (newtext: string) => void,
  updateNewPostText:(newtext: string) => void, 
  updateMesText: (newtext: string) => void,
}


const App: React.FC<AppPropsType>= ({ appState, addMassage, addPost, updateNewPostText, updateMesText,deletePost}) => {
  // debugger

  return (
    <div className={s.App}>

      <Header />
      <Main appState={appState} addMassage={addMassage} addPost={addPost} updateNewPostText={updateNewPostText} updateMesText={updateMesText} deletePost={deletePost}/>
      <Footer />
    </div>
  );
}

export default App;

//так, я хочу круговорот флакса на каждый символ 
//открытие- важна последовательность когда прокидываешь пропсы