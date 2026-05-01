import React from 'react'
import {  useNavigate, useParams } from 'react-router';


export default function ReadValueFromUrl() {

    const data= useParams();
    const navigation= useNavigate();
  return (
    <div>
        
        <button onClick={()=>{
            navigation("/");
        }}>MoveToOtherPage</button>
    </div>
  )
}
