"use client"
import React, { useState } from 'react'

const page = () => {
 const [userName, setUserName] = useState("")
  return (
    <>
    <h1 className="mb-5 text-2xl">Enter Your Name</h1>
    <form>
      <input type="text" 
      className="border-2 border-zinc-800 px-4 text-xl py-2" 
      value={userName}
      onChange={(e)=>{
        setUserName(e.target.value)
        console.log(userName);
      }}
      />
    </form>
    </>
  )
}

export default page