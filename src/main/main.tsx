import { Routes, Route } from 'react-router-dom'
import MainStyle from './main.module.scss'
import { Content } from '../content/content'; 
  import React from 'react';
import { LoginContainer } from '../login/loginContainer';
import { RegistrationForm } from '../content/autorization/registration/registrationForm';
import { ProfileContainer } from '../content/profile/profileContainer';


export type MainType={
}

export const Main:React.FC<MainType>= ({ 
  // appState, dispatch,
  }) => {
// debugger
  return (
      <main className={MainStyle.Main} >
        <div className={MainStyle.Flexbox}>
          <div className={MainStyle.Margin}></div>
				<Routes>
         
          <Route path='/content/*' element={<Content 
          // appState={appState} 
          // addMassage={addMassage}
          // dispatch={dispatch}
          //  updateNewPostText={updateNewPostText} 
          // updateMesText={updateMesText} 
          
          />}/>

          <Route path='/auth' element={<LoginContainer/>}/>

{/* 			
          <Route path='/autorization/*' element={<Authorization />} /> */}
				<Route path='/main/*' element={<Main />} />
				<Route path='/registrationForm/*' element={<RegistrationForm />} />
				</Routes>
          <div className={MainStyle.Margin}></div>
        </div>
      </main>
   
  );
}


