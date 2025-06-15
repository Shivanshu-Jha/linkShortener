import React from 'react'
import Link from 'next/link'

const Contact = () => {
    return (
        <>
            <div className='mx-auto max-w-lg bg-purple-200 my-16 p-8 rounded-lg translate-x-10 md:translate-x-0'>
                <h1 className='font-bold text-2xl text-center mb-3'>Contact Us</h1>
                <p className='text-center mb-4'>For any inquiries, please reach out to us at:</p>
                <p className='text-center font-semibold'><a href="mailto:shivanshu1221@gmail.com">shivanshu1221@gmail.com</a></p>

            </div>
        </>
    )
}

export default Contact
