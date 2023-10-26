import React from 'react';
import styles from '././Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPost } from './../../redux/state';




const Profile = (props) => {
  

    return (
        <div className={styles.mainContainer}>
            <ProfileInfo />
            <MyPosts posts={props.profilePages.posts} 
            newPostText={props.profilePages.newPostText} 
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;