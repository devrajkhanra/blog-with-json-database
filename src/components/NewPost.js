import React from 'react'

const NewPost = ({ postTitle, setPostTitle, postBody, setPostBody, handleSubmit }) => {
    return (
        <div className='grid place-items-center '>
            <form className='shadow-lg p-2' onSubmit={handleSubmit}>
                <h3 className='text-center font-normal text-amber-800'>POST</h3>
                <div className='flex flex-col my-2'>
                    <label>Title<span className='text-red-500'>*</span></label>
                    <input value={postTitle} onChange={(e) => setPostTitle(e.target.value)} className='ring-1' type='text' required placeholder='Enter Title' />
                </div>

                <div className='flex flex-col my-2'>
                    <label>Body<span className='text-red-500'>*</span></label>
                    <textarea value={postBody} onChange={(e) => setPostBody(e.target.value)} className='ring-1' type='text' required placeholder='Enter Body' />
                </div>

                <button className='bg-green-500 text-green-300 hover:text-green-50 hover:bg-green-700 rounded p-2 mx-auto my-2' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default NewPost