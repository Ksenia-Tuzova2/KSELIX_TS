import React, { useState } from 'react'
import PostAreaStyle from './postArea.module.scss'
import Box from '../../../../box.module.scss'
import BtnStyle from '../../../../btn.module.scss'
import NewPosts from '../newPosts/newPosts'


type Props = {
    addPost: (newPostText: string) => void;
    massageData: any[];
     newPostText: string;
    updateNewPostText: () => void;
}
export const PostArea = ({ addPost, massageData, newPostText, updateNewPostText }: Props) => {

    var MakeNewPost = () => massageData.reverse().map((m: any, pos: number) => <NewPosts massage={m.message} pos={pos} />)
    console.log('reversed', massageData.reverse())


    let [inputValue, setInputValue] = useState('')

    //  debugger
    return (
        <div>
            <div className={PostAreaStyle.FormWrapper}>
                <textarea className={PostAreaStyle.Input + " " + Box.Box}
                    placeholder='What`s news?'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.currentTarget.value)}
                />


                <button className={BtnStyle.Btn}
                    onClick={() => addPost(inputValue)}
                >post</button>

            </div>
            {MakeNewPost()}


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


