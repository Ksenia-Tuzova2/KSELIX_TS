import { Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import { DialogArea } from '../dialogArea/dialogArea'
import { DialogItem } from '../dialogItem/DialogItem'

//мап используй без ретурна, просто говори чего нужно возвращать
//здесь нужно отрисовать название переменной в скобках {}, иначе ничего не сработает



export const DialogBar:React.FC<any> = ({RenderDialogItem}) => {

   return (
      <div className='dialogBar'>
         {RenderDialogItem}
      </div>

   )
}
