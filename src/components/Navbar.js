import React from 'react';
import styles from '../styles/header.module.css';
import HomeIcon from '../images/icons/home.svg'

function Navbar() {
    return(
        <div className={styles.navbar}>
            <div>LOGO</div>
            <div className={styles.navlinks}>
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default Navbar;