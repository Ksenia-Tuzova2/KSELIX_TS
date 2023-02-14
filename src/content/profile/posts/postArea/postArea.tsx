import React, { LegacyRef, RefObject, useCallback, useEffect, useState } from 'react'
import PostAreaStyle from './postArea.module.scss'
import box from '../../../../box.module.scss'
import btnStyle from '../../../../btn.module.scss'
import { postAreaContainerType } from './postAreaContainer'
import NewPosts from '../newPosts/newPosts'
import { v1 } from 'uuid'


type MType = {
    id: string,
    message: string,
}



export class PostArea extends React.Component<postAreaContainerType>{

    componentDidUpdate(
        prevProps: Readonly<postAreaContainerType>,
        prevState: Readonly<{}>,
        snapshot?: any): void {

        console.log('postarea render');
    }

    render(): any {



        //посоветоваться - сделать ли обертку для ньюпост компоненты - она должна брать на себя ответственность по удаленю именно здесь?
        //это не экологично с точкри зрения трафика - перерисовывается и поле в котором пишутся посты, из-за того, что я передаю туда  функцию делит пост


        let newPostElement: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

        const addPostHandler = (newtext: string) => {
            this.props.addPost(newtext)
        }

        const updateNewPostTextHandler = (text: string) => {
            this.props.updateNewPostText(text)
        }


        return (
            <div>
                <div className={PostAreaStyle.FormWrapper}>
                    <textarea className={PostAreaStyle.Input + " " + box.box}
                        placeholder='What`s news?'
                        value={this.props.newPostText}
                        ref={newPostElement}
                        onChange={(e) => updateNewPostTextHandler(e.currentTarget.value)}
                    />


                    <button className={btnStyle.btn}
                        onClick={() => addPostHandler(this.props.newPostText)}
                    >post</button>
                    {/* <button onClick={showRef}>a</button> */}

                </div>
                <Posts
                    deletePost={this.props.deletePost}
                    messageData={this.props.messageData}
                />
            </div>
        )
    }


}

const Posts = (props: any) => {

    useEffect(() => {
        console.log('posts render');

    },)

    const makePost = useCallback(() => props.messageData.map((m: MType, pos: number,) => <NewPosts
        key={v1()}
        deletePost={props.deletePost}
        message={m.message}
        pos={pos}
        id={m.id} />), [props])

    return (<>{makePost()}</>)
}

// )
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


