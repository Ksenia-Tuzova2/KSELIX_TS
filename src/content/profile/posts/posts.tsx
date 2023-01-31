import { PostAreaContainer } from './postArea/postAreaContainer'

type PropsType={
    // messageData:Array<MType>,
    //  newPostText:string, 
    //  dispatch: (action: any) => any
}

export const Posts = ({ 
    // messageData, newPostText,  dispatch
}:PropsType) => {



    return (
        <div className="content__post">
            <PostAreaContainer   />
        </div>

    )
}
