import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdDelete, MdEdit } from 'react-icons/md'

const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)
    return (
        <div className='grid place-items-center'>
            {post &&
                <div className='my-1 bg-slate-100 rounded shadow-md p-2 hover:shadow-xl w-96 min-w-24'>
                    <h3>{post.title}</h3>
                    <hr />
                    <p>{post.body}</p>
                    <button className='rounded-full hover:bg-red-500 hover:text-white text-red-600' onClick={() => handleDelete(post.id)}><MdDelete /></button>
                    <Link to={`/edit/${post.id}`}><button className='rounded-full hover:bg-red-500 hover:text-white text-red-600'><MdEdit /></button></Link>
                </div>
            }
            {!post &&
                <div>
                    <h3><Link to='/'>{`Return to Homepage`}</Link></h3>
                </div>
            }
        </div>
    )
}

export default PostPage