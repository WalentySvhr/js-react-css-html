import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';





const MyPosts = () => {

    let posts = [
        { id: 1, message: 'Hi, how are you', like: 12 },
        { id: 2, message: 'its my firs post', like: 11 },
        { id: 3, message: 'Hi, how are you', like: 12 },
        { id: 4, message: 'its my firs post', like: 11 },
        { id: 5, message: 'Hi, how are you', like: 12 },
        { id: 6, message: 'its my firs post', like: 11 },
    ]
    let postsElements = posts.map((post) => <Post message={post.message} like={post.like} />)

    return (
        <div className={styles.content}>
            <h3>My Post</h3>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button className={styles.button}>New post</button>
            </div>

            <div className={styles.postBlock}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;