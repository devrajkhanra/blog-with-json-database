import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
    return (
        <div className='my-1 bg-slate-100 rounded shadow-md p-2 hover:shadow-xl w-96 min-w-24'>
            <Link to={`/post/${post.id}`}>
                <h3 className='font-nomral text-2xl text-slate-500'>{post.title}</h3>
            </Link>
            <hr />
            <p>{(post.body).length <= 25 ? post.body : `${(post.body).slice(0, 25)}...`}</p>
        </div>
    )
}

export default Post