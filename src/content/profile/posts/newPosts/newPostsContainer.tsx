import { deletePost } from '../../../../redux/profileReducer'
import NewPosts from './newPosts'
import { connect } from 'react-redux'


type MapDispatchToPropsType={
    deletePost: (id: string)=>void
}

const mapStateToProps=(state:any)=>{

}

const NewPostsContainer=connect(mapStateToProps,{
    deletePost: deletePost
})(NewPosts)