import React from 'react'
import type { ILogin } from './interface/ILogin';

 


export default function Login() {
    const [formData, setFormData] =
     React.useState<ILogin>({
        userName: '',
        password: 'test@123'
    });
    const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {

        setFormData({...formData,[event.target.name]: event.target.value});
    }
    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Username" onChange={handleUserName} name='userName'/>
        <input 
            type="password" 
            placeholder="Password" onChange={handleUserName} name='password'
        />

        <input type='submit' value="login"/>
    </form>
  )
}
