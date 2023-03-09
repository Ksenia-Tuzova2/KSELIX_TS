import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Choose } from './dialogArea/choose'
import { DialogAreaContainer } from './dialogArea/dialogAreaContainer'
import dialogStyle from './dialogs.module.scss'
import {DialogBarContainer} from "./DialogBar/DialogBarContainer";


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

