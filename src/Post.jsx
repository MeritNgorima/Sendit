import React from 'react';
import Gate from './images/gate.jpg';
import './Post.css';
import Avatar from '@material-ui/core/Avatar'

function Post({ caption,username,imageUrl }) {
    return (
        <div className='post'>
            <div className="post__header">
                <Avatar
                    className='post__avatar'
                    alt='Merit'
                    src='/static/images/avatar/1.jpg'
                />
                <h3>{username}</h3>
            </div>

            <img className='post__image' src={ imageUrl } alt="gate"/>

    <h4 className='post__text'><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default Post;
