import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Choose } from './dialogArea/choose'
import { DialogAreaContainer } from './dialogArea/dialogAreaContainer'
import dialogStyle from './dialogs.module.scss'
import {DialogBarContainer} from "./DialogBar/DialogBarContainer";

// export type MyMessageType = {
//     message: string;
// }
// export type MakeArrType = {
//     id: number,
//     name: string,
//     time: string,
//     message: string,
// }

// type MessageInitStateType = {
//     newMesText: string,
//     makeArr: MakeArrType[],
//     MyMessage: MyMessageType[],
// }

// type DialogProps = {
    // Massage: MessageInitStateType;
    // dispatch:(action:any)=>any
// }

export const Dialogs: React.FC = ({
    // Massage,dispatch
}) => {
    return (
        <div className={dialogStyle.message} >
            <DialogBarContainer
            // MakeArr={Massage.makeArr} 
            />
                <Routes>
                    <Route path='*' element={<Choose/>}/>
                    <Route path='/dialogArea/*'
                           element={<DialogAreaContainer/>}/>
                </Routes>
        </div>
    )
}

