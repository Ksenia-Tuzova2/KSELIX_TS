import { Store } from "./redux/store";


import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { StoreType } from "./redux/store";
import { StoreContecst } from "./storeContecst";


const root = ReactDOM.createRoot(document.getElementById("root")!);


// debugger
let renderEntireTree = () => {
	// debugger
	root.render(
		<React.StrictMode>
			<BrowserRouter>
			{/* <StoreContecst.Provider value={}> */}
				{/* bind связывает методы стора именно со стором, это нуно чтобы под капотом все не перепуталось- иногда пропс мжет перепутаться с зис */}
				<App appState={Store.getState().bind(Store)} 
				dispatch={Store.dispatch}
				 />
				 {/* </StoreContecst.Provider> */}

			</BrowserRouter>
		</React.StrictMode>
	);
	reportWebVitals();
}
renderEntireTree()
//НЕ МОГУ ЗДЕСЬ ВЫЗВАТЬ ГЕТСТЕЙТ СО СКОБКАМИ

//это колбек, когда одна функция вызывает другую
//при помощи этого мы обошли циклическую зависимость - стору нужна функция из индекса, а индексу нужен стор, но если бы мы сделали это импортами, то случился бы цикл , а так, при помощи колбека- мы спасли ситуацию
Store.subscribe(renderEntireTree)


//пишем скобки рядом с функцией, когда ходим ее вызвать прямо здесь, А ЕСЛИ ХОТИМ ПЕРЕДАТЬ - НЕ ВЫЗЫВАЕМ