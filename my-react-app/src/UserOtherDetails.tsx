import React from 'react'
import { useSelector } from 'react-redux';
import type { UserState } from './slice/userslice';

export default function UserOtherDetails() {

     const userInfo = useSelector((state: { userInfo: UserState }) => state.userInfo);
  
  return (
    <div>UserOtherDetails</div>
  )
}
