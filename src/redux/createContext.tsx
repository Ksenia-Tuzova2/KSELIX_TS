import React from "react";
import {Store} from 'redux'
import { RootState } from "./store-redux";

//что такое интерфейс и почему мы его пишем?


//43 урок- см начало 
//креэйт контекст нужен чтобы разгрузить пропсы- не прокидывать их из одной компоненты в лругую,а сделать так чтобы пропсы подавались в каждую компоненту , которая действительно нуждается в этих пропсах 

export const StoreContext=React.createContext({} as Store<RootState>)

type ProviderType={
  store:Store,
  children:any
}

export const Provider =({store,children}:ProviderType)=>{
  return(
    <StoreContext.Provider value={store}> 
    {children}
    </StoreContext.Provider>
  )
}