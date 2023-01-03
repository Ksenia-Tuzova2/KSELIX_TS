import  { Dispatch } from 'redux'
import { addMessageActionCreator, MyMessageType, updateMesTextActionCreator } from '../../../redux/messegeReduser'
import { RootState } from '../../../redux/store-redux'
import { connect } from 'react-redux'
import { DialogArea } from './dialogArea'

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
    newMesText: string
    MyMessage: MyMessageType[]
 }

 type MapDispatchToPropsType={
    updateMesText:( newtext: string)=>void,
    addMessage:(message: string)=>void,
 }

 export type DialogAreaContainerPropsType=MapDispatchToPropsType& MapStateToPropsType
 
let mapDispatchToProps=(dispatch:Dispatch):MapDispatchToPropsType=>{
    return{
        updateMesText:( newtext: string)=>dispatch(updateMesTextActionCreator(newtext)),
        addMessage:(message: string)=>dispatch(addMessageActionCreator(message)),
    }
}

let mapStateToProps=(state:RootState):MapStateToPropsType=>{
    return{
        newMesText:state.messegeReducer.newMesText, 
        MyMessage:state.messegeReducer.MyMessage
    }
}

export const DialogAreaContainer=connect(mapStateToProps,mapDispatchToProps)(DialogArea)
