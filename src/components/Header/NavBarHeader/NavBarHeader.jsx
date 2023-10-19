import React from 'react';
import styles from './NavBarHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';




const NavBarHeader = () => {
  return (
    <div className={styles.navigationHeader}>
      <div className={styles.buttonIcon}>
      <NavLink to='/profile'> <FontAwesomeIcon icon={faHouse} className={styles.homeIcon}  /> </NavLink>
      </div>
      <div className={styles.buttonIcon}>
        <NavLink to='/dialogs'><FontAwesomeIcon icon={faUserGroup} className={styles.friendsIcon} /> </NavLink>
      </div>
      <div className={styles.buttonIcon}>
        <a href=""> <FontAwesomeIcon icon={faVideo} className={styles.movieIcon} /></a>
      </div>
      <div className={styles.buttonIcon}>
        <a href=""> <FontAwesomeIcon icon={faStore} className={styles.marketIcon} /></a>
      </div >
      <div className={styles.buttonIcon}>
        <a href=""><FontAwesomeIcon icon={faGamepad} className={styles.gamesIcon} /></a>
      </div>
    </div>
  )
}

export default NavBarHeader;