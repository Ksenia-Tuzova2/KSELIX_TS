import React from 'react'
import DialogAreaStyle from './dialogArea.module.scss'
import Box from '../../../box.module.scss'
import BtnStyle from '../../../btn.module.scss'
import { MassageType } from '../../../redux/store'

// отлично, функции работают, но криво . Я хочу чтобы отрисовывались маленькие сообщения, а не пустые плашки в диалогбаре

type DialogProps = {
    addMassage: (message: string) => void,
    MyMessage: MassageType;
    updateMesText: (newtext: string) => void,
}

type MyMassageType={
    MyMessage: MassageType;
}


export const DialogArea:React.FC<DialogProps>= ({ addMassage, MyMessage, updateMesText}) => {
// debugger

// let mapMyMes=MyMessage.map((el:any)=><MyMasItem MyMessage={el.massage}/>)

//     const CreateRef = React.createRef()

    let MakeMas = () => {
  
    }
    let OnMesChange = () => {
        
        
    }
    return (
        <div className={DialogAreaStyle.DialogArea}>
            <div className={DialogAreaStyle.Massages}>
                <YourMasItem />
 
                <MyMasItem MyMessage={{ newMesText: '', makeArr: [], MyMassage: [] }} />
                {/* {mapMyMes} */}
                
            </div>
            <div className={DialogAreaStyle.Form}>

                <textarea className={DialogAreaStyle.TextInput+" "+Box.Box} placeholder='Type your massage...' value={MyMessage.newMesText}></textarea>
                <input type="file" className={DialogAreaStyle.FileInput} />
                <button onClick={MakeMas} onChange={OnMesChange} className={BtnStyle.Btn}>send</button>
            </div>
        </div>
    )
}

export const MyMasItem:React.FC<MyMassageType> = (props) => {
    return (
            <div className={DialogAreaStyle.MassageWrap}>
            <div className={DialogAreaStyle.FlexGrow}></div>
            <div className={DialogAreaStyle.MyMassage + ' ' + Box.Box}>{props.MyMessage.newMesText}</div>
            </div>

    )
}

export const YourMasItem = (props: any) => {
    return (
        <div className={DialogAreaStyle.MassageWrap}>
            <div className={DialogAreaStyle.Massage + ' ' + Box.Box}>hi</div>
            <div className={DialogAreaStyle.FlexGrow}></div>
        </div>

    )
}

