import React from 'react'
import DialogAreaStyle from './dialogArea.module.scss'
import Box from '../../../box.module.scss'
import BtnStyle from '../../../btn.module.scss'

import { v1 } from 'uuid'
import { addMessageActionCreator, updateMesTextActionCreator } from '../../../redux/messegeReduser'



// отлично, функции работают, но криво . Я хочу чтобы отрисовывались маленькие сообщения, а не пустые плашки в диалогбаре

type DialogProps = {
    // myMessage: any;

    // dispatch:(action:any)=>any
}

type MyMessageType = {
    message: string;
}


export const DialogArea: React.FC<DialogProps> = () => {
    // return (<StoreContext.Consumer>
    //     {(store) => {
    //         let state = store.getState()
    //
    //         let mapMyMes = () => state.messegeReducer.MyMessage.map((el: MyMessageType) => <MyMesItem key={v1()}
    //             message={el.message}
    //         />)
    //
    //         //сделать страничку диалогов чтобы через диспатч вызывать метод в стейте чтобы функция добавления сообщения отправляла строку в хранилище
    //         let addMessageHandler = (message: string) => {
    //             store.dispatch(addMessageActionCreator(message))
    //         }
    //         let upateInputValueChangeHandler = (newtext: string) => {
    //             store.dispatch(updateMesTextActionCreator(newtext))
    //         }

            return (
                <div className={DialogAreaStyle.DialogArea}>
                    <div className={DialogAreaStyle.Massages}>
                        <YourMasItem myMessage={state.messegeReducer.MyMessage} />

                        {mapMyMes()}
                    </div>
                    <div className={DialogAreaStyle.Form}>

                        <textarea className={DialogAreaStyle.TextInput + " " + Box.Box} placeholder='Type your message...' value={state.messegeReducer.newMesText}
                            onChange={(e) => upateInputValueChangeHandler(e.currentTarget.value)}></textarea>
                        <input type="file" className={DialogAreaStyle.FileInput} />
                        <button onClick={() => addMessageHandler(state.messegeReducer.newMesText)} className={BtnStyle.Btn}>send</button>
                    </div>
                </div>
            )
        }

    //     }
    // </StoreContext.Consumer>


export const MyMesItem: React.FC<MyMessageType> = ({ message, key }: any) => {

    return (
        <div className={DialogAreaStyle.MassageWrap}>
            <div className={DialogAreaStyle.FlexGrow}></div>
            <div className={DialogAreaStyle.MyMessage + ' ' + Box.Box}>{message}</div>
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

