import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='bg-purple-700 flex justify-between items-center text-white h-16 px-3'>
            <div className="logo font-bold text-2xl"><Link href="/">Url Shortner</Link></div>
            <ul className='flex justify-center gap-4 items-center'>
                <Link href="/"><li>Home</li> </Link>
                <Link href="/about"><li>About</li> </Link>
                <Link href="/shorten"><li>Shorten Link </li> </Link>
                <Link href="/contact"><li>Contact Us</li> </Link>
                <li className='flex gap-3'>
                    <Link href="/shorten" className='bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold '>
                        <button className='cursor-pointer'>
                            Try Now
                        </button>
                    </Link>
                    <Link href="/github" className='bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold '>
                        <button className='cursor-pointer'>
                            Github</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
