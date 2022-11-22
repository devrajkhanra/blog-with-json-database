import React from 'react'
import Post from './Post'

const Feed = ({ posts }) => {
    return (
        <div className='flex flex-col my-3'>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Feed