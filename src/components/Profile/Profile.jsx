import React from 'react';
import styles from '././Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPost } from './../../redux/state';




const Profile = (props) => {
  

    return (
        <div className={styles.mainContainer}>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} addPost={addPost} />
        </div>
    )
}

export default Profile;