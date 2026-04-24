import React from 'react'
import type { ILogin } from './interface/ILogin';
import axios from 'axios';

 


export default function Login() {
    const [formData, setFormData] =
     React.useState<ILogin>({
        username: '',
        password: 'test@123'
    });
    const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {

        setFormData({...formData,[event.target.name]: event.target.value});
    }
    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post("http://localhost:8080/api/auth/signin",formData).then(a=>{

        })
        console.log(formData);
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Username" onChange={handleUserName} name='username'/>
        <input 
            type="password" 
            placeholder="Password" onChange={handleUserName} name='password'
        />

        <input type='submit' value="login"/>
    </form>
  )
}
