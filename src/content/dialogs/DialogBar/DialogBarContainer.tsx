import { Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import { DialogItem } from '../dialogItem/DialogItem'
import { DialogBar } from './DialogBar'
import { StoreContext } from '../../../redux/createContext'

//мап используй без ретурна, просто говори чего нужно возвращать
//здесь нужно отрисовать название переменной в скобках {}, иначе ничего не сработает



export const DialogBarContainer: React.FC<any> = ({
   // MakeArr
}) => {
   return (
      <StoreContext.Consumer>
         {(store) => {
            let state = store.getState()
            let RenderDialogItem = state.messegeReducer.makeArr.map((el: any) => <Link to='dialogArea'>
               <DialogItem name={el.name} key={el.id} time={el.time} massage={el.massage} />
            </Link>)

            return (
               <DialogBar RenderDialogIte={RenderDialogItem} />
            )
         }
         }
      </StoreContext.Consumer>)
}
