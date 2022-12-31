import React from 'react'
import DialogAreaStyle from './dialogArea.module.scss'
import Box from '../../../box.module.scss'
import BtnStyle from '../../../btn.module.scss'
import {v1} from 'uuid'
import { DialogAreaContainerPropsType } from './dialogAreaContainer'


type MyMessageType = {
    message: string;
}


export const DialogArea  = ({updateMesText,addMessage,newMesText, MyMessage}:DialogAreaContainerPropsType) => {
  
    let mapMyMes = () => MyMessage.map((el: MyMessageType) => <MyMesItem key={v1()}    message={el.message}
    />)

    //         //сделать страничку диалогов чтобы через диспатч вызывать метод в стейте чтобы функция добавления сообщения отправляла строку в хранилище
            let addMessageHandler = (message: string) => {
                addMessage(message)
            }
            let upateInputValueChangeHandler = (newtext: string) => {
                updateMesText(newtext)
            }

    return (
        <div className={DialogAreaStyle.DialogArea}>
            <div className={DialogAreaStyle.Massages}>
                <YourMasItem message={'hi'}/>

                {mapMyMes()}
            </div>
            <div className={DialogAreaStyle.Form}>
                        <textarea className={DialogAreaStyle.TextInput + " " + Box.Box}
                                  placeholder='Type your message...' value={newMesText}
                                  onChange={(e) => upateInputValueChangeHandler(e.currentTarget.value)}></textarea>
                <input type="file" className={DialogAreaStyle.FileInput}/>
                <button onClick={() => addMessageHandler(newMesText)}
                        className={BtnStyle.Btn}>send
                </button>
            </div>
        </div>
    )
}

export const MyMesItem: React.FC<MyMessageType> = ({message}:MyMessageType) => {

    return (
        <div className={DialogAreaStyle.MassageWrap}>
            <div className={DialogAreaStyle.FlexGrow}></div>
            <div className={DialogAreaStyle.MyMessage + ' ' + Box.Box}>{message}</div>
        </div>

    )
}

export const YourMasItem:React.FC<MyMessageType> = ({message}:MyMessageType)=> {
    return (
        <div className={DialogAreaStyle.MassageWrap}>
            <div className={DialogAreaStyle.Massage + ' ' + Box.Box}>{message}</div>
            <div className={DialogAreaStyle.FlexGrow}></div>
        </div>

    )
}

