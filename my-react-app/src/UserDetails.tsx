import axios from 'axios'
import React, { useEffect } from 'react'
import authFetch from './global/interseptor';

export default function UserDetails() {
  
    useEffect(()=>{

        authFetch.get("/test/user").then(a=>{
            console.log(a.data);
        })

    },[])
  return (
    <div>UserDetails</div>
  )
}
