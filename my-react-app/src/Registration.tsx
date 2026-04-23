import React, { useEffect } from 'react'
import  { Form, Formik,Field, type FormikHelpers, ErrorMessage}  from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
interface IRegistration
{
    email:string;
    password:string;
    userName:string;
    confimPassword: string;
}

const validationRegistration = Yup.object({
    email:Yup.string().required("Email is required")
            .email("please enter valid email"),
    userName: Yup.string().required("UserName is required"),
    password: Yup.string().required("password is required"),
    confimPassword: Yup.string().
    required("please enter confirm password")
    .oneOf([Yup.ref('password')],"conf password should match with password ")
})
export default function Registration() {
     
  return (
    <Formik initialValues={{
        email: "",
        password: "",
        userName: "",
        confimPassword:""
    }}
    validationSchema={validationRegistration}
    
     onSubmit={(
          values: IRegistration
        
        ) => {
     axios.post("http://localhost:8080/api/auth/signup",values,{
      headers: {
        'Content-Type': "application/json"
      }
     })
           .then(a=>{
            console.log(a.data);
           })
        }}
    
    >
        <Form>
            <Field name="userName"></Field>
            <ErrorMessage name="userName"/>
            <Field name="email" type="email"></Field>
            <ErrorMessage name="email"/>
            <Field name="password" type="password"></Field>
            <ErrorMessage name="password"/>
            <Field name="confimPassword" type="password"></Field>
            <ErrorMessage name="confimPassword"/>     
            <input type='submit' value="save"/>
        </Form>

    </Formik>
  )
}
