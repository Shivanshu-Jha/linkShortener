import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-16 bg-purple-700 text-white flex justify-around items-center'>
            <div className="logo font-bold text-2xl">
                <Link href="/">BitLinks</Link>
            </div>
            <ul className='flex justify-center items-center gap-6'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/shorten"><li>Shorten</li></Link>
                <Link href="/contact"><li>Contact Us</li></Link>
                <li className='flex gap-2'>
                    <Link href="/shorten"><button className='bg-purple-500 shadow-lg p-3 py-1 font-semibold rounded-lg '>Try Now</button></Link>
                    <Link href="/github"><button className='bg-purple-500 shadow-lg p-3 py-1 font-semibold rounded-lg '>GitHub</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
