import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { MassageType } from '../../redux/store'
import { Choose } from './dialogArea/choose'
import { DialogArea } from './dialogArea/dialogArea'
import { DialogBar } from './DialogBar/DialogBar'
import s from'./dialogs.module.scss'

type DialogProps={
    addMassage: (message: string) => void,
    Massage: MassageType;
    updateMesText: (newtext: string) => void,
}

export const Dialogs :React.FC<DialogProps>= ({ Massage, addMassage, updateMesText }) => {
    // debugger
    return (
        <div className={s.Massage} >
            <DialogBar MakeArr={Massage.makeArr} />

            <Routes>
                <Route path='*' element={<Choose />} />
                <Route path='/dialogArea/*'
                    element={<DialogArea addMassage={addMassage} MyMessage={Massage} updateMesText={updateMesText} />}/>
            </Routes>
        </div>
    )
}
