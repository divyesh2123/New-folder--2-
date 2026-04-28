import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userFailure, userRequest, userSuccess, type UserState } from './slice/userslice';
import UserDetailsRedux from './UserDetailsRedux';



export default function UserRedux() {
    const userInfo = useSelector((state: { userInfo: UserState }) => state.userInfo);
    const dispatch = useDispatch()  
    console.log(userInfo);

    useEffect(()=>{

        dispatch(userRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            dispatch(userSuccess(res.data))
        })
        .catch(err=>{
             dispatch(userFailure(err.message))
        })


    },[])


  return (
    <div>
        <UserDetailsRedux/>
    </div>
  )
}
