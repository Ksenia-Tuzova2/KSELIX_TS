import { useState } from 'react';
import { v1 } from 'uuid';
import { messegeReducer } from './messegeReduser';
import { profileReducer } from './profileReducer';


var num = "1234";
var arr = Array.from(num);
console.log(arr)
console.log(typeof arr[0])

export type MakeArrType = {
	id: number,
	name: string,
	time: string,
	massage: string,
}
export type MyMassageType = {
	massage: string;
}

export type MassageType = {
	newMesText: string;
	makeArr: Array<MakeArrType>,
	MyMassage: MyMassageType[],
}

export type MassageData = {
	id: string,
	message: string,
}
export type ProfileType = {
	newPostText: String,
	massageData: Array<MassageData>,

}
export type StateType = {
	// bind(Store: StoreType): StateType;

	Massage: MassageType,
	Profile: ProfileType,
}

export type StoreType = {
	_callSubscriber: (props: StateType) => void,
	_State: StateType,
	getState: () => StateType,
	// deletePost: (id: string) => void,
	// AddPost: (newtext: string) => void,
	// updateNewPostText: (newtext: string) => void,
	subscribe: (observer: any) => void,
	// AddMassage: (message: string) => void,
	// updateMesText: (newtext: string) => void,

	dispatch: (action: any) => any
}
export const addPostActionCreator = (newtext: string) => {
	return { type: ADD_POST, newtext }
}

export const updateNewPostTextActionCreator = (newtext: string) => {
	return { type: UPDATE_NEW_POST_TEXT, newtext }
}

export const deletePostActionCreator = (id: string) => {
	return { type: DELETE_POST, id }
}

export const addMessageActionCreator = (message: string) => {
	return { type: ADD_MESSAGE, message }
}

export const updateMesTextActionCreator = (newtext: string) => {
	return { type: UPDATE_MES_TEXT, newtext }
}


// const NewPosts:React.FC=()=>{

// let [state,setState]=useState()

// }
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const DELETE_POST = 'DELETE-POST'

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MES_TEXT = 'UPDATE-MES-TEXT'
export let Store: StoreType = {

	_callSubscriber(props) {
		console.log('state changed ')
	},

	_State: {

		Massage: {
			newMesText: '',
			makeArr: [
				{
					id: 1,
					name: 'Katya',
					time: '12:20',
					massage: 'YO',
				},
				{
					id: 2,
					name: 'TASHA',
					time: '12:23',
					massage: 'ьц',
				},
			],
			MyMassage: [

				{ massage: 'hahhaha' },
				{ massage: 'yoyo' },
			]
		},
		Profile: {
			newPostText: '',
			massageData: [
				{
					id: "1",
					message: 'mmmmm',
				},
				{
					id: "2",
					message: 'lorem',
				},
				{
					id: "3",
					message: 'lorem',
				},
				{
					id: "4",
					message: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?',
				},
				{
					id: "5",
					message: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?',
				},
				{
					id: '6',
					message: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?',
				},
			],
		},
	},


	getState() {
		// debugger
		return this._State;
	},


	//=======================================================

	// window.State = State
	// let [localState, setLocalState] = useState(this._State.Profile.massageData);


	//как сделать удаление элемента - делаем функцию делит и прокидываем в кнопку при он клике она должна вызыаваться . 
	// когда мы хотим что-то добавить, удалить, отфильтровать - мы прежде всего должны думать об изменении данных в хранилище. значит функция будет изменять хранилище. здесь в сторе мы не можем использовать юзстейт, поэтому присваиваем старому массиву отфитрованный массив - фильтруем с условием что айди не равна приходящей из кнопки айдишке 
	//потом прокидываем айди из стейта в кнопку
	//не забудь про байнд- он скажет функции где именно использовать внутри зис

	//как сделать обмен данными внутри поля ввода - написать юз стейт с пустой строкой внутри компоненты где лежит инпут , при ончейндже будет вызываться при каждом символе сетстейт функция с параметром каррент таргет валью, а валью будет равно стейту


	//как сделать добавление элемента
	//делаем функцию аддпост , прокидываем ее в пропсах вызываем в онклике при помощи колбека с параментром стейта _ чтобы записывать новые данные в новый пост , в самой функции создаем переменную, которая будет похожа на объект из массива куда мы его будет записывать, при помощи метода аншифт в этой же функции запуливаем новый пост сверху, НЕ ЗАБЫВАЕМ ПРО БАЙНД, чтобы все обновлялось вовремя



	// 	deletePost(id: string) {
	// //можно присваивать старому массиву новое значение и тогда он будет автоматически перерисовываться
	// 	this._State.Profile.massageData = this._State.Profile.massageData.filter((t) => t.id !== id)

	// 		this._callSubscriber(this._State)
	// 	},

	// AddPost(newtext: string) {
	// 	let newPost = {
	// 		id: v1(),
	// 		message: newtext,
	// 	}

	// 	this._State.Profile.massageData.unshift(newPost)
	// 	this._callSubscriber(this._State)

	// },


	// updateNewPostText(newtext: string) {
	// 	this._State.Profile.newPostText = newtext;
	// 	this._callSubscriber(this._State)
	// },

	subscribe(observer) {


		this._callSubscriber = observer
	},


	// AddMassage(message: string) {
	// 	let newM = {
	// 		massage: message,
	// 	};
	// 	this._State.Massage.MyMassage.push(newM)
	// 	this._callSubscriber(this._State)
	// },

	// updateMesText(newtext: string) {
	// 	this._State.Massage.newMesText = newtext;
	// 	this._callSubscriber(this._State)
	// },

	dispatch(action) {

		this._State.Massage=messegeReducer(this._State.Profile,action)
		this._State.Profile=profileReducer(this._State.Profile,action)


		if (action.type === UPDATE_MES_TEXT) {
			this._State.Massage.newMesText = action.newtext;
			this._callSubscriber(this._State)
		} 
		else if (action.type === ADD_MESSAGE) {
			let newM = {
				massage: action.message,
			};
			this._State.Massage.MyMassage.unshift(newM)
			
			console.log(this._State.Massage.MyMassage);
			
			this._callSubscriber(this._State)
		} 
		else if (action.type === DELETE_POST) {
			this._State.Profile.massageData = this._State.Profile.massageData.filter((t) => t.id !== action.id)
			this._callSubscriber(this._State)
		} 
		else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._State.Profile.newPostText = action.newtext;
			this._callSubscriber(this._State)
		} 
		else if (action.type === ADD_POST) {
			let newPost = {
				id: v1(),
				message: action.newtext,
			}
			this._State.Profile.massageData.unshift(newPost)
			this._callSubscriber(this._State)
		}


	}
}

//@ts-ignore
// window.Store = Store