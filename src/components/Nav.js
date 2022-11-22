import React from 'react'
import { Link } from 'react-router-dom'
import { MdHome, MdPostAdd } from 'react-icons/md'

const Nav = ({ search, setSearch }) => {
    return (
        <nav className='flex flex-row justify-center bg-slate-600 py-3'>
            <form>
                <input value={search} onChange={(e) => setSearch(e.target.value)} className='ring-2 mx-2' type='text' placeholder='Search' />
            </form>
            <ul className='text-gray-500 flex justify-center items-center'>
                <li className='mx-2 hover:text-sky-50 text-2xl'><Link to='/'><MdHome /></Link></li>
                <li className='mx-2 hover:text-sky-50 text-2xl'><Link to='/post'><MdPostAdd /></Link></li>
                <li className='mx-2 font-normal hover:text-sky-50 '><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav