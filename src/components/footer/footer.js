import React from 'react'
import { Link } from 'gatsby'
import { GitHub } from 'react-bytesize-icons'
import footerStyles from './footer.module.css'

 const Footer = () => {
    var d = new Date();
    var n = d.getFullYear();
    
    return (
        <footer className={footerStyles.container}>
            <Link to='/'><li>Resources</li></Link>
            <Link to='/support'><li>Support</li></Link>
            <Link to='/contribute'><li>Contribute</li></Link>
            <a href="https://github.com/jmilani224/palettable" target="blank">
                <GitHub />
            </a>
            <p className={footerStyles.copyright}>&copy; {n}</p>
        </footer>
    )
}

export default Footer
