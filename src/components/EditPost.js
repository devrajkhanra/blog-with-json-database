import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPost = ({ posts, handleEdit, editTitle, setEditTitle, editBody, setEditBody }) => {
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)

    useEffect(() => {
        if (post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditTitle, setEditBody])

    return (
        <div className='grid place-items-center '>
            <form className='shadow-lg p-2 w-96' onSubmit={(e) => e.preventDefault()}>
                <h3 className='text-center font-normal text-amber-800'>EDIT</h3>
                <div className='flex flex-col my-2'>
                    <label>Title<span className='text-red-500'>*</span></label>
                    <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} className='ring-1' type='text' required placeholder='Enter Title' />
                </div>

                <div className='flex flex-col my-2'>
                    <label>Body<span className='text-red-500'>*</span></label>
                    <textarea value={editBody} onChange={(e) => setEditBody(e.target.value)} className='ring-1' type='text' required placeholder='Enter Body' />
                </div>

                <button className='bg-green-500 text-green-300 hover:text-green-50 hover:bg-green-700 rounded p-2 mx-auto my-2' type='submit' onClick={() => handleEdit(post.id)}>Submit</button>
            </form>
        </div>
    )
}

export default EditPost