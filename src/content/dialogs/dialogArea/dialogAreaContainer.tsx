import React from 'react'
import  { Dispatch } from 'redux'
import DialogAreaStyle from './dialogArea.module.scss'
import Box from '../../../box.module.scss'
import BtnStyle from '../../../btn.module.scss'

import { v1 } from 'uuid'
import { addMessageActionCreator, updateMesTextActionCreator } from '../../../redux/messegeReduser'
import { PostArea } from '../../profile/posts/postArea/postArea'
import { updateNew } from 'typescript'
import { RootState } from '../../../redux/store-redux'
import { MapStateToProps } from 'react-redux'
import { connect } from 'react-redux'
import { DialogArea } from './dialogArea'


// отлично, функции работают, но криво . Я хочу чтобы отрисовывались маленькие сообщения, а не пустые плашки в диалогбаре

type DialogProps = {
    // myMessage: any;

    // dispatch:(action:any)=>any
}

type MyMessageType = {
    message: string;
}


// export const DialogAreaContainer: React.FC<DialogProps> = () => {
//     return (<StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState()

//             let mapMyMes = () => state.messegeReducer.MyMessage.map((el: MyMessageType) => <MyMesItem key={v1()}
//                 message={el.message}
//             />)

//             //сделать страничку диалогов чтобы через диспатч вызывать метод в стейте чтобы функция добавления сообщения отправляла строку в хранилище
//             let addMessageHandler = (message: string) => {
//                 store.dispatch(addMessageActionCreator(message))
//             }
//             let upateInputValueChangeHandler = (newtext: string) => {
//                 store.dispatch(updateMesTextActionCreator(newtext))
//             }

//             return (
//                <PostArea addPost={} updateNewPostText={function (text: string): void {
//                     throw new Error('Function not implemented.')
//                 } } newPostText={''}/>
//             )
//         }

//         }
//     </StoreContext.Consumer>

//     )
// }

 type MapStateToPropsType={

 }

 type MapDispatchToPropsType={
     addPost:()=>void,
     updateNewPostText:()=>void
 }

let mapDispatchToProps=(dispatch:Dispatch):MapDispatchToPropsType=>{
    return{
        addPost:()=>void,
         updateNewPostText:()=>void
    }
}

let mapStateToProps=(state:RootState):MapStateToPropsType=>{
    return{
        newPostText:
    }
}

export const DialogAreaContainer=connect(mapStateToProps,mapDispatchToProps)(DialogArea)

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

