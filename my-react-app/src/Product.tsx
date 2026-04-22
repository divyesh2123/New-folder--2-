import React, { useEffect } from 'react'
import type IProduct from './interface/IProduct';
import ProductDetails from './ProductDetails';


export default function Product() {

    const[product,setproduct] = React.useState<IProduct[]>([]);

     useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setproduct(json))   
        .catch(err=>console.log(err))

     },[])
 

     
  return (
    <div>{
        product.map((val:IProduct,index:number)=>{

            return <ProductDetails product={val} index={index}></ProductDetails>
        })
        
        }</div>
  )
}
