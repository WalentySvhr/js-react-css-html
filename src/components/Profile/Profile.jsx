import React from 'react';
import styles from '././Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = () => {
    return (
        <div className={styles.mainContainer}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;