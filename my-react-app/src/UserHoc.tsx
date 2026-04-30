import React from 'react'
import HOCWithSearchAPI from './HOCWithSearchAPI';

 function UserHoc(data:any) {
    console.log(data);
  return (
    <div>UserHoc</div>
  )
}

const UserInfo= HOCWithSearchAPI(UserHoc,'users');

export default UserInfo

