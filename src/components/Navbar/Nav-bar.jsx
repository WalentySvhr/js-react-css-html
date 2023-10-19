import React from 'react';
import styles from './Nav-bar.module.css';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div  className={styles.item}>
                <NavLink to='/dialogs'>Dialogs</NavLink>
            </div>
            <div  className={styles.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div  className={styles.item}>
                <NavLink to='/other'>Other</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;