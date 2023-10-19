import React from 'react';
import style from './HeaderUser.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMessage,faBell,faUser } from '@fortawesome/free-solid-svg-icons';


const HeaderUser = () => {
    return (
        <div className={style.headerUser}>
            <div className={style.button}>
                <FontAwesomeIcon icon={faBars} className={style.menuIcon} />
            </div>
            <div className={style.button}>
                <FontAwesomeIcon icon={faMessage} className={style.messageIcon} />
            </div>
            <div className={style.button}>
            <FontAwesomeIcon icon={faBell}  className={style.bellIcon} />
            </div>
            <div className={style.button}>
            <FontAwesomeIcon icon={faUser} className={style.userIcon} />
            </div>
            
        </div>)
}

export default HeaderUser;