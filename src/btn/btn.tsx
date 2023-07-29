import btnStyle from './btn.module.scss'


type PropsType={
    name:string
}
const Btn=(props: PropsType)=>{
    return(
        <div >
        <a className={btnStyle.btn} href="#">{props.name}
        </a>
        </div>
    )
}

export default Btn

