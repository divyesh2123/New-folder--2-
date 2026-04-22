import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Home1 from './Home.tsx'
import Login from './Login.tsx'
import Product from './Product.tsx'
import UserInfo from './UserInfo.tsx'
import './global/globalaxios.ts'
import AddUser from './AddUser.tsx'
import DisplayInfo from './Display.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DisplayInfo />
  </StrictMode>,
)
