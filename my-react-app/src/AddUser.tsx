import React from 'react'
import type { IAddUser } from './interface/IAddUser';
import axios from 'axios';

export default function AddUser() {
    const [user,userInfo] = React.useState<IAddUser>({
        name: '',
        avatar: '',
        email: '',
        phoneNumber: ''
    })
    const handelSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post("https://69e7162a68208c1debe84b16.mockapi.io/UserInfo",user)
        .then(a=>{
            console.log(a.data);
        })
    }


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        userInfo({ ...user, [name]: value });
    }   
  return (
    <form onSubmit={handelSubmit}>

        <input type="text" placeholder='Name' value={user.name} 
        onChange={onChangeHandler} name='name' />
        <input type="text" placeholder='Avatar' value={user.avatar} 
        onChange={onChangeHandler} name='avatar' />
        <input type="email" placeholder='Email' value={user.email} 
        onChange={onChangeHandler} name='email' />
        <input type="text" placeholder='Phone Number' value={user.phoneNumber} 
        onChange={onChangeHandler} name='phoneNumber' />
        
        <input type="submit" value="Add User" />
    </form>
  )
}
