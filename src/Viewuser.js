import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Viewuser() {
    const params = useParams()
    const [data,setData] = useState({})

    useEffect(()=>{
        userdata()
    },[])
    
    let userdata =async ()=>{
   try {
    const data=await axios.get(`https://6346c13f9eb7f8c0f884b683.mockapi.io/users/${params.id}`)
    console.log(data)
    setData(data.data)
   } catch (error) {
    alert(error)
   }
    }
  return (
   <div className='App'>
    <h3>id: {params.id} </h3>
    <h3>Name: user{params.id}</h3>
    <h3>Email: user{params.id}@gamil.com</h3>
    <h3>country: India</h3>
    <h3>State: Tamilnadu</h3>
    <h3>City: Chennai</h3>
    <h3>dob: 06/01/2000</h3>
   </div>
  )
}

export default Viewuser