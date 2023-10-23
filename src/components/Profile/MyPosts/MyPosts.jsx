import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { faDebian } from '@fortawesome/free-brands-svg-icons';





const MyPosts = (props) => {
    let postsElements = props.posts.map((post) => <Post message={post.message} like={post.like} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={styles.content}>
            <h3>My Post</h3>
            <div>
                <textarea ref={newPostElement} ></textarea>
            </div>
            <div>
                <button onClick={addPost} className={styles.button}>New post</button>
            </div>

            <div className={styles.postBlock}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;