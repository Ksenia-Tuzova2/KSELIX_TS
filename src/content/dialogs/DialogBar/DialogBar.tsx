import { Link } from 'react-router-dom'
import React from 'react'
import { DialogItem } from '../dialogItem/DialogItem'
import { DialogBarContainerPropsType } from './DialogBarContainer'
import { v1 } from 'uuid'

//мап используй без ретурна, просто говори чего нужно возвращать
//здесь нужно отрисовать название переменной в скобках {}, иначе ничего не сработает



export const DialogBar:React.FC<any> = ({MakeArr}:DialogBarContainerPropsType) => {

   let RenderDialogItem = MakeArr.map((el: any) => (<div key={v1()}><Link to='dialogArea'>
                <DialogItem name={el.name} key={el.id} time={el.time} message={el.message} /></Link></div>))
   return (
      <div className='dialogBar'>
         {RenderDialogItem}
      </div>

   )
}
