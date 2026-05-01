import React from 'react';
import { useRoutes } from 'react-router';
import Home from './Home';
import MainLayout from './MainLayout';
import HomeWithUseRoute from './HomeWithUseRoute';
import ExpenseManagement from './ExpenseManagement';

const LazyHomeWithUseRoute = React.lazy(() => import('./HomeWithUseRoute'));

const LazyExpenseManagement = React.lazy(() => import('./ExpenseManagement'));


export default function RouteInfo() {

     const routes = useRoutes([

       {
      
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LazyHomeWithUseRoute />
      },
      {
        path: "/schedule",
        element: <LazyExpenseManagement />
      }
    ]
  },
  {
    path:"/login",
    element: <div>Login Page</div>
  }
     ])

        return routes;
}
