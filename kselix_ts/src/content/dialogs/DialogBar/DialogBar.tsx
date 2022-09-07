import { Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import { DialogArea } from '../dialogArea/dialogArea'
import { DialogItem } from '../dialogItem/DialogItem'

//мап используй без ретурна, просто говори чего нужно возвращать
//здесь нужно отрисовать название переменной в скобках {}, иначе ничего не сработает



export const DialogBar:React.FC<any> = ({ MakeArr}) => {
// debugger
   let RenderDialogItem = MakeArr.map((el:any) => <Link to='dialogArea'>
      <DialogItem name={el.name} key={el.id} time={el.time} massage={el.massage} />
   </Link>)

   return (
      <div className='dialogBar'>
         {RenderDialogItem}
      </div>

   )
}
