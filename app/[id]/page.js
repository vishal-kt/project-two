"use client"

import axios from 'axios'
import Link from 'next/link'
import React, { useState ,useEffect } from 'react'
const  page = ({params })=>{

  const {id}=params;
  const [user, setUsers] = useState([])
  const getUsers= async ()=>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users"+id)
    setUsers(data.username)
  }
  
  useEffect(()=>{
    getUsers()
  },[])

  return<>{data.username}</>
}

export default page;