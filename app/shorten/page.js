"use client"
import Link from 'next/link';
import React, { useState } from 'react'


const Shorten = () => {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [generated, setGenerated] = useState("")
    const [shortLinks, setShortLinks] = useState([])


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

    // const showL = () => {



    //     const requestOptions = {
    //         method: "GET",
    //         redirect: "follow"
    //     };

    //     fetch("/api/generate", requestOptions)
    //         .then((response) => response.text())
    //         .then((result) => console.log(result))

    //         .catch((error) => console.error(error));

    // }

    const showL = () => {
        fetch("/api/generate")
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched Links:", data);
                setShortLinks(data); // Ensure React updates the state properly
            })
            .catch((error) => console.error("Error fetching short links:", error));
    };


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
                <div className='flex justify-center items-center gap-4 mt-2'>
                    <button onClick={generate} className='bg-purple-500 shadow-lg p-3 py-1  my-3 hover:scale-110 transition delay-100 duration-300 ease-in-out font-semibold rounded-lg text-white '>Generate</button>
                    <button onClick={showL} className='bg-purple-500 shadow-lg p-3 py-1  my-3 hover:scale-110 transition delay-100 duration-300 ease-in-out font-semibold rounded-lg text-white '>Show Links</button>
                </div>
            </div>
            {generated && <> <span className='font-bold text-lg'>Your Link<br /></span>
                <code>
                    <Link target='_blank' href={generated}>{generated}</Link>
                </code>
            </>}

            {shortLinks.length > 0 && (
                <>
                    <span className='font-bold text-lg'>Your Short Links<br /></span>
                    {shortLinks.map((link) => (
                        <code key={link._id}>
                            <Link target='_blank' href={`${process.env.NEXT_PUBLIC_HOST}/${link.shortUrl}`}>
                                {process.env.NEXT_PUBLIC_HOST}/{link.shortUrl}
                            </Link>
                            <br />
                        </code>
                    ))}
                </>
            )}



        </div>

    )
}

export default Shorten
