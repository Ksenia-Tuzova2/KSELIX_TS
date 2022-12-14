import { DialogBar } from './DialogBar'
import { connect } from 'react-redux'
import { RootState } from '../../../redux/store-redux'

type MapStateToPropsType={
MakeArr: MakeArrType[]
}

 type MakeArrType = {
	id: number,
	name: string,
	time: string,
	message: string,
}

export type DialogBarContainerPropsType=MapStateToPropsType

let mapStateToProps=(state:RootState):MapStateToPropsType=>{
return{
   MakeArr: state.messegeReducer.makeArr
}
}

export const DialogBarContainer=connect(mapStateToProps)(DialogBar)