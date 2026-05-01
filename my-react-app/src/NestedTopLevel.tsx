import React from 'react'
import { Outlet } from 'react-router'

export default function NestedTopLevel() {
  return (
    <div>
       
        <ul>
            <li>Html</li>
            <li>Sql</li>
            <li>JavaScript</li>
             <li>React</li>
             <li>Node</li>
        </ul>
          <Outlet/>
     
    </div>
  )
}
