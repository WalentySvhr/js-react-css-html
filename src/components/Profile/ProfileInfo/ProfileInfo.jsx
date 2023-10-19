import React from 'react';
import styles from '././ProfileInfo.module.css';




const ProfileInfo = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.boxImg}>
                <img className={styles.img} src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'></img>
            </div>

            <div className={styles.descriptionBlock}> 
                ava+description
            </div>
        </div>

    )
}

export default ProfileInfo;