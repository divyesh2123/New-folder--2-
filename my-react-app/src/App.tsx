import { useState } from 'react';
import './App.css'
import LanguageContext from './dataInfo/LanguageContext'
import FormikCaptchaForm from './FormikCaptchaForm'
import AppHeader from './AppHeader';
import DisplayObject from './DisplayObject';

function App() {

  const [lan, setLan] = useState<string>('fr'); 
  return (
    <>
    <LanguageContext.Provider value={{lan, setLan}}>
     <AppHeader/>
     <DisplayObject/>
    </LanguageContext.Provider>
   
    </>
  )
}

export default App
