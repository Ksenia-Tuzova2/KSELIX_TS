import { Routes, Route } from 'react-router-dom'
import MainStyle from './main.module.scss'
import { Content } from '../content/content'; 
import { Login} from '../login/login'
  import React from 'react';
import { StateType } from '../redux/store';


export type MainType={
  appState:StateType, 
  // addMassage:any,
  //  addPost:any, 
  //  updateNewPostText:any, 
  //  updateMesText:any,
  //  deletePost:any
   dispatch:(action:any)=>any
}

export const Main:React.FC<MainType>= ({ appState, dispatch,
  }) => {
// debugger
  return (
      <main className={MainStyle.Main} >
        <div className={MainStyle.Flexbox}>
          <div className={MainStyle.Margin}></div>
				<Routes>
         
          <Route path='/content/*' element={<Content appState={appState} 
          // addMassage={addMassage}
          dispatch={dispatch}
          //  updateNewPostText={updateNewPostText} 
          // updateMesText={updateMesText} 
          
          />}/>
          <Route path='/exit' element={<Login appState={appState} 
          dispatch={dispatch}
            />}/>

			
				</Routes>
          <div className={MainStyle.Margin}></div>
        </div>
      </main>
   
  );
}


