import React, { useEffect } from 'react'
import axios from 'axios'
import type { IUser } from './interface/IUser'


export default function UserInfo() {
    const [user, setUser] = React.useState<IUser[]>([])

    useEffect(()=>{

        axios.get('users')
        .then((response)=>{
           
            setUser(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })

    },[])

    console.log(user);
  
  return (
    <div>UserInfo</div>
  )
}
