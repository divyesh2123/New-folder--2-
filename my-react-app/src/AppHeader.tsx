import React, { useContext } from 'react'
import LanguageContext from './dataInfo/LanguageContext';
import type { IlanguageContext } from './interface/IProduct';

export default function AppHeader() {

    const data = useContext<IlanguageContext>(LanguageContext);
  
  return (
    <div>
        <select value={data.lan} onChange={(e) => data.setLan(e.target.value)}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
        </select>
    </div>
  )
}
