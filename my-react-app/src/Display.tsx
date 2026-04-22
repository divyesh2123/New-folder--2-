import React, { useEffect } from 'react'

import axios from 'axios';
import type { IAddUser } from './interface/IAddUser';
import { DataGrid, type GridColDef} from '@mui/x-data-grid';
import ManageForm from './ManageForm';
export default function DisplayInfo() {
    const [user,userInfo] = React.useState<IAddUser[]>([])
    const [open, setOpen] = React.useState<boolean>(false);

    const handleClickOpen = () => {
      setOpen(true);
    }
    const handleClose = () => {
      setOpen(false);
    }

    const columns: GridColDef[] = [
  { field: 'name', headerName: 'Product Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'phoneNumber', headerName: 'Phone Number', width: 300 },
  { field: 'createdAt', headerName: 'Created At', width: 300 },
  {field:'', headerName:"action", width: 300, renderCell:(params)=>{

    console.log(params.row);

    return (<><button onClick={()=>{
        axios.delete(`https://69e7162a68208c1debe84b16.mockapi.io/UserInfo/${params.row.id}`)
        .then(a=>{
            console.log(a.data);
            userInfo(user.filter((u)=>u.id !== params.row.id))
        })
  }}>Delete</button>

<button onClick={()=>{
    handleClickOpen();
        
  }}>Edit</button>
  

</>
)
}}
];

    useEffect(() => {

        axios.get("https://69e7162a68208c1debe84b16.mockapi.io/UserInfo")
        .then(a=>{
            userInfo(a.data);
        })


    }, [])
   
  return (
  <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={user} columns={columns} />

      <ManageForm open={open} handleClose={handleClose} />
    </div>
  )
}
