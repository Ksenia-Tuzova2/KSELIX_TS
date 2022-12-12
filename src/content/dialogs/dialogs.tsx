import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Choose } from './dialogArea/choose'
import { DialogAreaContainer } from './dialogArea/dialogAreaContainer'
import { DialogBarContainer } from './DialogBar/DialogBarContainer'
import s from './dialogs.module.scss'

// export type MyMassageType = {
//     massage: string;
// }
// export type MakeArrType = {
//     id: number,
//     name: string,
//     time: string,
//     massage: string,
// }

// type MessageInitStateType = {
//     newMesText: string,
//     makeArr: MakeArrType[],
//     MyMassage: MyMassageType[],
// }

// type DialogProps = {
    // Massage: MessageInitStateType;
    // dispatch:(action:any)=>any
// }

export const Dialogs: React.FC = ({
    // Massage,dispatch 
}) => {
    return (
        <div className={s.Massage} >
            <DialogBarContainer
            // MakeArr={Massage.makeArr} 
            />

            <Routes>
                <Route path='*' element={<Choose />} />
                <Route path='/dialogArea/*'
                    element={<DialogAreaContainer/>} />
            </Routes>
        </div>
    )
}
