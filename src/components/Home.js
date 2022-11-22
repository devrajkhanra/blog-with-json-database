import React from 'react'
import Feed from './Feed'

const Home = ({ posts }) => {
    return (
        <div className='grid place-items-center'>
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p>No Post Yet</p>
            )}
        </div>
    )
}

export default Home