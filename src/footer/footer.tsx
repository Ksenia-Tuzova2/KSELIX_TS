
import React from 'react'
import FooterStyle from './footer.module.scss'
import Footer__menu from './footerMenu/footerMenu'




const Footer=()=>{
    return(
        <footer className={FooterStyle.Footer__wrapper}>
        <Footer__menu/>
        <a className={FooterStyle.rights} href='#'>All rights reserved</a> 
        </footer>
    )
}

export default Footer