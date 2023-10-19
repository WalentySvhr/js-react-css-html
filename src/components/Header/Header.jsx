import React from 'react';
import classes from './Header.module.css';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderUser from './HeaderUser/HeaderUser';
import NavBarHeader from './NavBarHeader/NavBarHeader';

const Header = () => {
    return (
        <div className={classes.header}>
            <HeaderLogo />
            <NavBarHeader />
            <HeaderUser />  
        </div>)
}

export default Header;