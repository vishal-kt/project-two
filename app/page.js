"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
  const getUsers=async()=>{
    const [users, setusers] = useState(second)
    // const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    // const data = res.data
    // console.log(data);


    const{data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(data);
    setusers(data)
  } 
  return (
    <>
    <h1 className='text-center text-2xl font-bold' >This is Home</h1>
    <a className='block' href="/contact">Contact</a>
    
    <button onClick={getUsers}  className='bg-green-600 my-4 text-white px-4 py-2 rounded font-bold '>GET DATA</button>
    <div className='p-8 bg-slate-200 mt-5 ml-3'>
      {users.map((e))}
    </div>

    </>
  )
}

export default page