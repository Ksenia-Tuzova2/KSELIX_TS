import { Routes, Route } from 'react-router-dom'
import MainStyle from './main.module.scss'
import { Content } from '../content/content'; 
  import React from 'react';
import { LoginContainer } from '../login/loginContainer';
import { RegistrationFormRedux } from '../content/autorization/registration/registrationForm';


export type MainType={
}

export const Main:React.FC<MainType>= ({ 
  // appState, dispatch,
  }) => {

   const onSubmit=(formData:any)=>{
console.log(formData);

   }

  return (
      <main className={MainStyle.Main} >
        <div className={MainStyle.Flexbox}>
          <div className={MainStyle.Margin}></div>
				<Routes>
         
          <Route path='/content/*' element={<Content/>}/>

          <Route path='/auth' element={<LoginContainer/>}/>

{/* 			
          <Route path='/autorization/*' element={<Authorization />} /> */}
				<Route path='/main/*' element={<Main />} />
				<Route path='/registrationForm/*' element={<RegistrationFormRedux onSubmit={onSubmit}/>} />
				</Routes>
          <div className={MainStyle.Margin}></div>
        </div>
      </main>
   
  );
}


