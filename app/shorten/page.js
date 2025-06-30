"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {

    const [url, setUrl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
      const options = {method: 'POST', body: JSON.stringify({ url, shorturl })};

fetch('/api/generate', options)
  .then(response => response.json())
  .then((response) => {
    setUrl("")
    setShorturl("")
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    console.log(response)
    alert(response.message)
  
  })
  .catch(err => console.error(err));
    }
    
      

  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'>Generate Your Short URLs</h1>
      <div className='flex flex-col gap-5'>
        <input type='text' 
        value={url}
        placeholder='Enter your URL'
         onChange={e => {setUrl(e.target.value)}} />

        <input type='text' 
        value={shorturl}
        className='p-4 py-2 focus:outline-purple-600 rounded-md'
        placeholder='Enter your Preferred short URL text'
         onChange={e => {setShorturl(e.target.value)}} />

        <button onClick={generate} className='bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold text-white my-3'>Generate</button>
      </div>

      {generated && <>
        <span className='font-bold text-lg'>Your Link:</span>
        <code>
           <Link target='_blank' href={generated} >{generated}</Link> 
        </code>
      </>}
    </div>
  )
}

export default Shorten
