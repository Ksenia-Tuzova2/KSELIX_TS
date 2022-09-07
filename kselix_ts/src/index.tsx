import {Store} from "./redux/store";


import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { StoreType } from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById("root")!);



 let renderEntireTree = () => {
	// debugger
	root.render(
		<React.StrictMode>
			<BrowserRouter>

				<App appState={Store.getState()} addMassage={Store.AddMassage} addPost={Store.AddPost.bind(Store)} updateNewPostText={Store.updateNewPostText} updateMesText={Store.updateMesText} />

			</BrowserRouter>
		</React.StrictMode>
	);
	reportWebVitals();
 }
renderEntireTree() 
//НЕ МОГУ ЗДЕСЬ ВЫЗВАТЬ ГЕТСТЕЙТ СО СКОБКАМИ

//это колбек, когда одна функция вызывает другую
Store.subscribe(() => renderEntireTree())


//пишем скобки рядом с функцией, когда ходим ее вызвать прямо здесь, А ЕСЛИ ХОТИМ ПЕРЕДАТЬ - НЕ ВЫЗЫВАЕМ