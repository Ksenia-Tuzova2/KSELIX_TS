import { Routes, Route } from 'react-router-dom'
// import LoginStyle from './login.module.scss'
import { RegistrationForm } from '../content/autorization/registration/registrationForm'
import { Authorization } from '../content/autorization/autorization';
import { Main } from '../main/main';
import { MainType } from '../main/main';
import React from 'react';



export const Login:React.FC<MainType>= ({ appState, addMassage, addPost, updateNewPostText, updateMesText, deletePost}) => {
	// debugger
	return (
		<>
				<Routes>
				<Route path='/autorization/*' element={<Authorization />} />
				<Route path='/main/*' element={<Main appState={appState} addMassage={addMassage} addPost={addPost} updateNewPostText={updateNewPostText} updateMesText={updateMesText} deletePost={deletePost}/>} />
				<Route path='/registrationForm/*' element={<RegistrationForm />} />
				</Routes>
		</>

	);
}

