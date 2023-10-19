import React from 'react';
import classes from './Post.module.css';





const Post = (prorps) => {
    return (
        <content className={classes.content}>
            <div>
                {prorps.message}
                <div>
                    <span>like</span> {prorps.like} 
                </div>
            </div>
        </content>
    )
}

export default Post;