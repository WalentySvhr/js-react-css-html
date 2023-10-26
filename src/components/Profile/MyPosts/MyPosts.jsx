import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';





const MyPosts = (props) => {
    let postsElements = props.posts.map((post) => <Post message={post.message} like={post.like} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={styles.content}>
            <h3>My Post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
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