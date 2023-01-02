import React, { LegacyRef, RefObject, useState } from 'react'
import PostAreaStyle from './postArea.module.scss'
import Box from '../../../../box.module.scss'
import btnStyle from '../../../../btn.module.scss'
import { postAreaContainerType } from './postAreaContainer'
import NewPosts from '../newPosts/newPosts'


type MType = {
    id: string,
    message: string,
}
type Props = {
 
    // newPostText: string ;
    // addPost:(newtext:string)=>void
    // updateNewPostText:(newtext:string)=>void
    // makeNewPost:()=>any
    // dispatch: (action: any) => any
}
export const PostArea = ({newPostText, messageData,addPost ,updateNewPostText ,deletePost}: postAreaContainerType) => {
    // debugger
    const makeNewPost = () => messageData.map((m: MType, pos: number,) => <NewPosts 
    deletePost={deletePost}
    message={m.message} pos={pos}id={m.id} />)
    

    let newPostElement:LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

    const addPostHandler = (newtext: string) => {
        addPost (newtext)
    }

    const updateNewPostTextHandler = (text: string) => {
        updateNewPostText(text)
    }

  
    return (
        <div>
            <div className={PostAreaStyle.FormWrapper}>
                <textarea className={PostAreaStyle.Input + " " + Box.Box}
                    placeholder='What`s news?'
                    value={newPostText}
                    ref={newPostElement}
                    onChange={(e) => updateNewPostTextHandler(e.currentTarget.value)}
                />


                <button className={btnStyle.Btn}
                    onClick={() => addPostHandler(newPostText)}
                >post</button>
                {/* <button onClick={showRef}>a</button> */}

            </div>
          {makeNewPost()}
        </div>
    )

}
       //если написать алерт без стрелочной функции, то мы уже вызываем уже готовую функцию , которой нет, а значит она андефайнд

       //есть виртуал дом и просто дом - пользователь взаимодействует только с виртуал домом

    //сначала создаем createref=react.createref(), привязываем это к полю при помощи ref

    //потом создаем функцию addpost, которая будет считывать то, что мы написали в поле ввода

    //в ней пишем переменную, которая будет слушать значение поля createref.current?.value
    //где знак вопроса потом в компиляторе преобразовывается в условие - если карент валью существует, то идем дальше. Это нужно для тогочтобы тайп скрипт не ругался
    //привязываем addpost к кнопке , к событию онклик
    //назначем алерт внутри add post чтобы удостоверится что все работает

    //узнать как правильно делать кнопки -
    //подумать над тем, нужна ли отдельная компонента с кнопкой, или же достаточно только модуля


