import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

export default function ManageForm(props:any) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        props.setEditUser({ ...props.editUser, [name]: value });
      }
  return (
    <Dialog
        open={props.open}
       
        onClose={props.handleClose}
        aria-describedby="alert-dialog-slide-description"
        role="alertdialog"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">

            <form onSubmit={props.handleSubmit}>
                <input type="text" placeholder='Name' 
                value={props.editUser.name} 
                 name='name' onChange={handleChange} />
                <input type="text" placeholder='Avatar' 
                value={props.editUser.avatar} 
                 name='avatar' onChange={handleChange} />
                <input type="email" placeholder='Email' 
                value={props.editUser.email} 
                 name='email' onChange={handleChange} />
                <input type="text" placeholder='Phone Number'
                 value={props.editUser.phoneNumber} 
                 name='phoneNumber' onChange={handleChange} />
            </form>
          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleSubmit} autoFocus>
            Save
          </Button>
          <Button onClick={props.handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
  )
}
