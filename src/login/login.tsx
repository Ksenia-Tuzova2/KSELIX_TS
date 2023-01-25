import { Routes, Route } from 'react-router-dom'
import { RegistrationForm } from '../content/autorization/registration/registrationForm'
import { Authorization } from '../content/autorization/autorization';
import { Main } from '../main/main';
import React from 'react';
import { LoginMapContainerType } from './loginContainer';



export const Login: React.FC<LoginMapContainerType> = (
	{
		id,
		email,
		login,
		isFetching,
		isAuth,
		setFetch,
		setUserData,

	}) => {
	// debugger
	let props={
		id,
		email,
		login,
		isFetching,
		isAuth,
		setFetch,
		setUserData,

	}
	return (
		<>
		<Authorization props={props}/>
		</>

	);
}

