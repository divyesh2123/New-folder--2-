import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'
import CustComLink from './CustomerInfo';

export default function MainLayout() {
    //if login
    const isLoggedIn = localStorage.getItem("token") !== null ? true : false;
    const useNavigation = useNavigate();

    React.useEffect(()=>{
        if(!isLoggedIn){
            useNavigation("/login");
        }
    },[isLoggedIn])

    
  return (
  <div>
        <h1>Main Layout</h1>
        <p>This is the main layout of the application.</p>
        <CustComLink to="/" >Home</CustComLink>
        <CustComLink to="/schedule"  >Schedule</CustComLink>
        <Outlet/>
        <footer>
            <p>© 2024 My React App. All rights reserved.</p>
        </footer>
    </div> 
  )
}
