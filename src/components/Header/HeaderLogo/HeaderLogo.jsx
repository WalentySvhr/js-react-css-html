import React from 'react';
import styles from './HeaderLogo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const HeaderLogo = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <FontAwesomeIcon icon={faFacebook} className={styles.iconLogo} />
            </div>
            <div className={styles.search}>
                <input type="text" />
            </div>
        </header>)
}

export default HeaderLogo;