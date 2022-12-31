import { Link } from 'react-router-dom'
import FooterMenuStyle from './footerMenu.module.css'

const Footer__menu = () => {
    return (

        <div className={FooterMenuStyle.Footer__menu}>

            <Link to='/menu'>Menu</Link>
            <Link to='/exit'>Exit</Link>
            <Link to='/'>Kselix</Link>
            <Link to='/help'>Help</Link>

        </div>

    )
}

export default Footer__menu