import React, { useEffect } from 'react'

import axios from 'axios';
import type { IAddUser } from './interface/IAddUser';
import { DataGrid, type GridColDef} from '@mui/x-data-grid';
import ManageForm from './ManageForm';
export default function DisplayInfo() {
    const [user,userInfo] = React.useState<IAddUser[]>([])
    const [open, setOpen] = React.useState<boolean>(false);
    const [editUser, setEditUser] = React.useState<IAddUser>({
        name: '',
        avatar: '', 
        email: '',
        phoneNumber: ''
    });

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

  

    return (<><button onClick={()=>{
        axios.delete(`https://69e7162a68208c1debe84b16.mockapi.io/UserInfo/${params.row.id}`)
        .then(a=>{
            console.log(a.data);
            userInfo(user.filter((u)=>u.id !== params.row.id))
        })
  }}>Delete</button>

<button onClick={()=>{
    handleClickOpen();
        setEditUser({
            name: params.row.name,
            avatar: params.row.avatar,
            email: params.row.email,
            phoneNumber: params.row.phoneNumber,
            id: params.row.id,
            createdAt: params.row.createdAt
        })
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

    const handleSubmit = () => {
      

        console.log(editUser);


        axios.put(`https://69e7162a68208c1debe84b16.mockapi.io/UserInfo/${editUser.id}`,editUser)
        .then(a=>{  
            console.log(a.data);
            userInfo(user.map((u)=> u.id === editUser.id ? editUser : u))
            handleClose();
        }).catch((err)=>{
            console.log(err);
        })

    }
   
  return (
  <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={user} columns={columns} />

      <ManageForm open={open} handleClose={handleClose} editUser={editUser} setEditUser={setEditUser}  handleSubmit={handleSubmit}/>
    </div>
  )
}
