import React, { use, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestProducts } from './slice/productslice';

export default function ProductDetailsInfo() {
    const data= useSelector((state:any)=>state.product.data);

    console.log(data);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(requestProducts());
    },[dispatch])
  return (
    <div>ProductDetailsInfo</div>
  )
}
