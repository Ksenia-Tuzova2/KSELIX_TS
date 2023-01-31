import { deletePost } from '../../../../redux/profileReducer'
import NewPosts from './newPosts'
import { connect } from 'react-redux'


//ПОСОВЕТОВАТЬСЯ ПРАВИЛЬНО ЛИ ТУТ СОЗДАТЬ КОНТЕЙНЕР РАДИ ОДНОЙ ФУНККЦИИ, ЧТОБЫ КАЖДЫЙ РАЗ НЕ ПЕРЕРИСОВЫВАТЬ ПОЛЕ

type MapDispatchToPropsType={
    deletePost: (id: string)=>void
}

const mapStateToProps=(state:any)=>{
// как-то забубенить данные из мапа сюда , где вызывается нью постс
}


export const NewPostsContainer=connect(mapStateToProps,{
    deletePost: deletePost
})(NewPosts)