import { createSlice, type Action } from '@reduxjs/toolkit'
import type { IReduxAction } from '../interface/IReduxAction';

export interface IUserInfo {
  id: number;
  name: string;
  email: string;
}

export interface UserState {
    isLoadding: boolean;
    users: IUserInfo[];
    error: string | null;
}

const initialState: UserState = {
    isLoadding: false,
    users: [],
    error:null
}

const userslice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
     
     userRequest:(state)=>{
        state.isLoadding=true
     },
     userSuccess:(state: UserState,action: IReduxAction)=>{
        state.isLoadding=false
        state.users=action.payload
     },
     userFailure:(state: UserState,action: IReduxAction)=>{
        state.isLoadding=false
        state.error=action.payload
     }


  }
});

export const {userRequest,userSuccess,userFailure} = userslice.actions

export default userslice.reducer