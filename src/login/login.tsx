import { Routes, Route } from 'react-router-dom'
import { RegistrationForm } from '../content/autorization/registration/registrationForm'
import { Authorization } from '../content/autorization/autorization';
import { Main } from '../main/main';
import { MainType } from '../main/main';
import React from 'react';



export const Login:React.FC<MainType>= ({
	//  appState,
	//  dispatch
	}) => {
	// debugger
	return (
		<>
				<Routes>
				<Route path='/autorization/*' element={<Authorization />} />
				<Route path='/main/*' element={<Main />} />
				<Route path='/registrationForm/*' element={<RegistrationForm />} />
				</Routes>
		</>

	);
}

