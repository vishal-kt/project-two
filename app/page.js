"use client"
import React, { useState } from 'react'

const page = () => {
 
  return (
    <>
    <h1 className='text-2xl'>Enter Your Name</h1>
    <form>
      <input type='text' className='border-2 border-zinc-800 px-4 text-xl py-2'/>
    </form>
    </>
  )
}

export default page