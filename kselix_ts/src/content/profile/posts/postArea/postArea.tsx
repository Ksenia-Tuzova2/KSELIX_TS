import React, { useState } from 'react'
import PostAreaStyle from './postArea.module.scss'
import Box from '../../../../box.module.scss'
import BtnStyle from '../../../../btn.module.scss'
import NewPosts from '../newPosts/newPosts'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer'



type Props = {
    massageData: any[];
     newPostText: string;
    dispatch:(action:any)=>any
}
export const PostArea = ({ massageData, newPostText, dispatch }: Props) => {

    const makeNewPost = () => massageData.map((m: any, pos: number,) => <NewPosts massage={m.message} pos={pos} dispatch={dispatch} id={m.id}/>)

    const addPostHandler=(newtext:string)=>{
        dispatch(addPostActionCreator(newtext))
    }
 
    const updateNewPostTextHandler=(newtext:string)=>{
        dispatch(updateNewPostTextActionCreator(newtext))
    }
 

    //  debugger
    return (
        <div>
            <div className={PostAreaStyle.FormWrapper}>
                <textarea className={PostAreaStyle.Input + " " + Box.Box}
                    placeholder='What`s news?'
                    value={newPostText}
                    onChange={(e) => updateNewPostTextHandler(e.currentTarget.value)}
                />


                <button className={BtnStyle.Btn}
                    onClick={() => addPostHandler(newPostText)}
                >post</button>

            </div>
            {makeNewPost()}


        </div>


    )

}
       //если написать алерт без стрелочной функции, то мы уже вызываем уже готовую функцию , которой нет, а значит она андефайнд

       //есть виртуал дом и просто дом - пользователь взаимодействует только с виртуал домом

    //сначала создаем createref=react.createref(), привязываем это к полю при помощи ref

    //потом создаем функцию addpost, которая будет считывать то, что мы написали в поле ввода

    //в ней пишем переменную, которая будет слушать значение поля createref.current.value
    //привязываем addpost к кнопке , к событию онклик
    //назначем алерт внутри add post чтобы удостоверится что все работает

    //узнать как правильно делать кнопки -
    //подумать над тем, нужна ли отдельная компонента с кнопкой, или же достаточно только модуля


