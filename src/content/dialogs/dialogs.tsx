import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Choose } from './dialogArea/choose'
import { DialogArea } from './dialogArea/dialogArea'
import { DialogBar } from './DialogBar/DialogBar'
import s from'./dialogs.module.scss'

export type MyMassageType = {
	massage: string;
}
export type MakeArrType = {
	id: number,
	name: string,
	time: string,
	massage: string,
}

type MessageInitStateType={
  newMesText:string,
  makeArr: MakeArrType[],
  MyMassage:MyMassageType[],
}

type DialogProps={
    Massage: MessageInitStateType;
    dispatch:(action:any)=>any
}

export const Dialogs :React.FC<DialogProps>= ({ Massage,dispatch }) => {
    // debugger
    return (
        <div className={s.Massage} >
            <DialogBar MakeArr={Massage.makeArr} />

            <Routes>
                <Route path='*' element={<Choose />} />
                <Route path='/dialogArea/*'
                    element={<DialogArea dispatch={dispatch} myMessage={Massage} />}/>
            </Routes>
        </div>
    )
}
