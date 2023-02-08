import React from 'react'
import dialogAreaStyle from './dialogArea.module.scss'
import box from '../../../box.module.scss'
import btnStyle from '../../../btn.module.scss'
import { v1 } from 'uuid'
import { DialogAreaContainerPropsType } from './dialogAreaContainer'


type MyMessageType = {
    message: string;
}


export const DialogArea = ({ updateMesText, addMessage, newMesText, MyMessage }: DialogAreaContainerPropsType) => {

    let mapMyMes = () => MyMessage.map((el: MyMessageType) => <MyMesItem key={v1()} message={el.message}
    />)
   
    let addMessageHandler = (message: string) => {
        addMessage(message)
    }
    let upateInputValueChangeHandler = (newtext: string) => {
        updateMesText(newtext)
    }

    return (
        <div className={dialogAreaStyle.dialogArea}>
            <div className={dialogAreaStyle.messages}>
                <YourMasItem message={'hi'} />
                {mapMyMes()}
            </div>
            <div className={dialogAreaStyle.form}>
                <textarea
                    className={dialogAreaStyle.textInput + " " + box.box}
                    placeholder='Type your message...'
                    value={newMesText}
                    onChange={(e) => upateInputValueChangeHandler(e.currentTarget.value)}>
                </textarea>
                <input
                    type="file"
                    className={dialogAreaStyle.fileInput} />
                <button
                    onClick={() => addMessageHandler(newMesText)}
                    className={btnStyle.btn}>send
                </button>
            </div>
        </div>
    )
}

export const MyMesItem: React.FC<MyMessageType> = ({ message }: MyMessageType) => {

    return (
        <div className={dialogAreaStyle.messageWrap}>
            <div className={dialogAreaStyle.flexGrow}></div>
            <div className={dialogAreaStyle.myMessage + ' ' + box.box}>{message}</div>
        </div>

    )
}

export const YourMasItem: React.FC<MyMessageType> = ({ message }: MyMessageType) => {
    return (
        <div className={dialogAreaStyle.MassageWrap}>
            <div className={dialogAreaStyle.Massage + ' ' + box.box}>{message}</div>
            <div className={dialogAreaStyle.FlexGrow}></div>
        </div>

    )
}

