"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useState,useEffect  } from 'react'

const page = () => {
  const [users, setUsers] = useState([])
  const getUsers=async()=>{
   
    // const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    // const data = res.data
    // console.log(data);


    const{data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(data);
    setUsers(data)
  } 


  useEffect(() => {
    getUsers()
  }, [])
  


  return (
    <>
    <h1 className='text-center text-2xl font-bold' >This is Home</h1>
    <a className='block' href="/contact">Contact</a>
    
    <button onClick={getUsers}  className='bg-green-600 my-4 text-white px-4 py-2 rounded font-bold '>GET DATA</button>
    <div className='p-8 bg-slate-200 mt-5 ml-3'>
     <ul>
      {users.map((e)=>{
        return <li>{e.name} -- <a href={`/${e.id}`}>Explore</a>  </li>
      })}
     </ul>
    </div>

    </>
  )
}

export default page