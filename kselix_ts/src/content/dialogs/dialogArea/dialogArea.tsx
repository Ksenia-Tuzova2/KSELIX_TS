import React from 'react'
import DialogAreaStyle from './dialogArea.module.scss'
import Box from '../../../box.module.scss'
import BtnStyle from '../../../btn.module.scss'
import { addMessageActionCreator, MassageType, updateMesTextActionCreator } from '../../../redux/store'
import { v1 } from 'uuid'


// отлично, функции работают, но криво . Я хочу чтобы отрисовывались маленькие сообщения, а не пустые плашки в диалогбаре

type DialogProps = {
    myMessage: any;
    
    dispatch:(action:any)=>any
}

type MyMassageType={
    myMessage: any;
}


export const DialogArea:React.FC<DialogProps>= ({ myMessage, dispatch}) => {
// debugger
console.log(myMessage);


let mapMyMes=()=> myMessage.MyMassage.map((el:any)=><MyMesItem key={v1()} myMessage={el.massage}/>)

//сделать страничку диалогов чтобы через диспатч вызывать метод в стейте чтобы функция добавления сообщения отправляла строку в хранилище
    let addMessageHandler = (message:string) => {
    dispatch(addMessageActionCreator(message))
    // console.log('d');
    }
    let upateInputValueChangeHandler = (newtext:string) => {
        dispatch(updateMesTextActionCreator(newtext))
        // console.log('d');
        
        
    }

    return (
        <div className={DialogAreaStyle.DialogArea}>
            <div className={DialogAreaStyle.Massages}>
                <YourMasItem myMessage={myMessage.MyMassage} />
 
               {mapMyMes()}
            </div>
            <div className={DialogAreaStyle.Form}>

                <textarea className={DialogAreaStyle.TextInput+" "+Box.Box} placeholder='Type your massage...' value={myMessage.newMesText}
                 onChange={(e) => upateInputValueChangeHandler(e.currentTarget.value)}></textarea>
                <input type="file" className={DialogAreaStyle.FileInput} />
                <button onClick={()=>addMessageHandler(myMessage.newMesText)}  className={BtnStyle.Btn}>send</button>
            </div>
        </div>
    )
}

export const MyMesItem:React.FC<MyMassageType> = ({myMessage,key}:any) => {
   
    return (
            <div className={DialogAreaStyle.MassageWrap}>
            <div className={DialogAreaStyle.FlexGrow}></div>
            <div className={DialogAreaStyle.MyMassage + ' ' + Box.Box}>{myMessage}</div>
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

