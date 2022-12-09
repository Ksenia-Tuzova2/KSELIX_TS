import { Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import { DialogArea } from '../dialogArea/dialogArea'
import { DialogItem } from '../dialogItem/DialogItem'
import { DialogBar } from './DialogBar'

//мап используй без ретурна, просто говори чего нужно возвращать
//здесь нужно отрисовать название переменной в скобках {}, иначе ничего не сработает



export const DialogBarContainer:React.FC<any> = ({ 
   // MakeArr
}) => {
// debugger

 <StoreContext.Consumer>
 {(store)=>{
     let state=store.getState()
     let RenderDialogItem = MakeArr.map((el:any) => <Link to='dialogArea'>
     <DialogItem name={el.name} key={el.id} time={el.time} massage={el.massage} />
  </Link>)
  
   return (
      <DialogBar/>
   )
}
}
<StoreContext.Consumer/>
}
