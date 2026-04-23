import React, { useEffect } from 'react'
import type IProduct from './interface/IProduct';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

export default function Product() {

    const[product,setproduct] = React.useState<IProduct[]>([]);

     useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setproduct(json))   
        .catch(err=>console.log(err))

     },[])

     const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 200 },
        { field: 'price', headerName: 'Price', width: 100 },
        { field: 'description', headerName: 'Description', width: 300 },
        { field: 'category', headerName: 'Category', width: 150 },
        { field: 'image', headerName: 'Image URL', width: 200 },
      ];
 
     
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={product}
        columns={columns}
      
        checkboxSelection
      />
    </div>
  )
}
