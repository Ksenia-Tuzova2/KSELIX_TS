import React from "react";


//43 урок- см начало 
//креэйт контекст нужен чтобы разгрузить пропсы- не прокидывать их из одной компоненты в лругую,а сделать так чтобы пропсы подавались в каждую компоненту , которая действительно нуждается в этих пропсах 

export const StoreContecst=React.createContext(null)