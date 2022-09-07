import LikeStyle from './like.module.scss'
import LikeIcon from './like.svg'

const Like = ({counter, pos}: any) => {
    return (
        <button className={LikeStyle.Like__btn} onClick={() => alert(pos)}>
            <div>{counter}</div>
                <img src={LikeIcon} alt="" />
            </button>
    )
}



export default Like