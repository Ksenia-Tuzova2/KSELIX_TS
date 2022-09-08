import { useState } from 'react';
import { v1 } from 'uuid';
import React from 'React'

var num = "1234";
var arr = Array.from(num);
console.log(arr)
console.log(typeof arr[0])

export type MakeArrType={
	id: number,
	name: string,
	time: string,
	massage: string,
}
export type 	MyMassageType = {
	massage:string;
}

export type MassageType={
	newMesText:string;
	makeArr: Array<MakeArrType>,
	MyMassage: MyMassageType[],
}

export type MassageData={
	id: string,
	message: string,
}
export type ProfileType={
	newPostText:String,
	massageData: Array<MassageData>,

}
export type StateType = {

	Massage: MassageType,
	Profile:ProfileType,
}

export type StoreType = {
	_callSubscriber: (props: StateType) => void,
	_State: StateType,
	getState: () => StateType,
	deletePost:(id:string)=>void,
	AddPost: (newtext: string) => void,
	updateNewPostText: (newtext: string) => void,
	subscribe: (observer:any) => void,
	AddMassage: (message: string) => void,
	updateMesText: (newtext: string) => void,
	

}


// const NewPosts:React.FC=()=>{

// let [state,setState]=useState()

// }

export let Store: StoreType = {

	_callSubscriber(props) {
		console.log('state changed ')
	},

_State: {

		Massage: {
			newMesText: 'aaaa',
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

deletePost(id:string){
	// debugger
	let filtredTask=this._State.Profile.massageData.filter((t)=>t.id!==id)
	console.log(filtredTask)
	this._callSubscriber(this._State)
},

AddPost(newtext: string) {
	let newPost={
		id: v1(),
		message: newtext,
	}

	// this._State.Profile.massageData = [...this._State.Profile.massageData, newPost]
	this._State.Profile.massageData.unshift(newPost)
	this._callSubscriber(this._State)

	//  console.log(setLocalState([newPost, ...localState])) 

	},


	updateNewPostText(newtext: string) {
		this._State.Profile.newPostText = newtext;
		this._callSubscriber(this._State)
	},

	subscribe(observer) {
		this._callSubscriber = observer
	},


	// debugger
	AddMassage(message:string) {
		let newM = {
			massage: message,
		};
		this._State.Massage.MyMassage.push(newM)
		this._callSubscriber(this._State)
	},

	updateMesText(newtext:string) {
		this._State.Massage.newMesText = newtext;
		this._callSubscriber(this._State)
	},

}


//@ts-ignore
window.Store = Store