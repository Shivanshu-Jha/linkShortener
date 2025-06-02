"use client"
import Link from 'next/link';
import React, { useState } from 'react'


const Shorten = () => {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [generated, setGenerated] = useState("")


    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shortUrl": shortUrl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
                // Reset the input fields after successful generation
                setUrl('');
                setShortUrl('');
                console.log(result)
                alert(result.message);
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className='mx-auto max-w-lg bg-purple-200 my-16 p-8 rounded-lg'>
            <h1 className='font-bold text-2xl text-center mb-3'>Generate your short URLs</h1>
            <div className='flex flex-col gap-4'>
                <input type="text"
                    className='px-4 py-2 focus:outline-purple-600 focus:scale-110 transition delay-150 duration-300 ease-in-out rounded-md'
                    placeholder='Enter your URL'
                    value={url}
                    onChange={e => { setUrl(e.target.value) }}
                />
                <input type="text"
                    className='px-4 py-2 focus:outline-purple-600 focus:scale-110 transition delay-150 duration-300 ease-in-ou rounded-md'
                    placeholder='Enter your prefered short URL text'
                    value={shortUrl}
                    onChange={e => { setShortUrl(e.target.value) }}
                />
                <button onClick={generate} className='bg-purple-500 shadow-lg p-3 py-1 mx-40 my-3 hover:scale-110 transition delay-100 duration-300 ease-in-out font-semibold rounded-lg text-white '>Generate</button>
            </div>
            {generated && <> <span className='font-bold text-lg'>Your Link<br /></span>
                <code>
                    <Link target='_blank' href={generated}>{generated}</Link>
                </code>
            </>}
        </div>
    )
}

export default Shorten
