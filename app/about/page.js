import React from 'react'

const About = () => {
    return (
        <>
            <div className='mx-auto max-w-2xl bg-purple-200 my-16 p-8 rounded-lg translate-x-10 md:translate-x-0'>
                <h1 className='font-bold text-2xl text-center mb-3'>About BitLinks</h1>
                <p className='text-lg mb-4'>
                    BitLinks is a simple URL shortening service that allows you to create short, easy-to-share links. 
                    Whether you are sharing links on social media, in emails, or anywhere else, BitLinks makes it easy to manage and track your URLs.
                </p>
                <p className='text-lg mb-4'>
                    Our service is designed to be user-friendly and efficient, providing you with a quick way to generate short links without any hassle.
                </p>
                <p className='text-lg mb-4'>
                    We value your privacy and security, ensuring that your data is handled with care. 
                    Join us in making the web a more accessible place with BitLinks!
                </p>
            </div>
        </>
    )
}

export default About
