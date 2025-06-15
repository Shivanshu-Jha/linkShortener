import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: "Bitlinks - Your trusted URL shortener",
    description: "Bitlinks helps you to shorten your URLs easilt and effectively.",
    icons: {
        icon: "/favicon.ico",
    },
};

const Navbar = () => {
    return (
        <nav className='md:h-16 h-28 md:mx-auto md:w-full w-fit bg-purple-700 text-white flex md:justify-around items-center'>
            <div className="logo mx-2 translate-x-2 -translate-y-9 md:translate-x-0 md:translate-y-0 font-bold hover:scale-125 transition delay-150 duration-300 ease-in-out md:text-2xl text-2xl underline   ">
                <Link href="/">BitLinks</Link>
            </div>
            <ul className='flex justify-center items-center gap-6 -translate-x-14 translate-y-2 md:translate-x-0 md:translate-y-0'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/shorten"><li>Shorten</li></Link>
                <Link href="/contact"><li>Contact</li></Link>
                <li className='text-xs md:text-lg '>
                    <Link href="/shorten"><button className='bg-purple-500 mx-2 -translate-x-3 shadow-lg p-4 py-1 hover:scale-110 transition delay-150 duration-300 ease-in-out font-semibold rounded-lg '>Try_Now</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
