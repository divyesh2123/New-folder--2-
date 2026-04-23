import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import * as yup from 'yup';

const validationSchema = yup.object({
  username: yup.string()
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default function LoginWithMUI() {

 const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values:any) => {
     
        axios.post("http://localhost:8080/api/auth/signin",values,{
          headers: {
            'Content-Type': "application/json" }}).then((response)=>{
              console.log(response.data);
        }).catch((error)=>{
          console.log(error);   });
        
  }});    



  return (
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="username"
          label="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
        
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />      
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
  )
}
