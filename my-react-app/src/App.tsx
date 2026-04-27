import { useState } from 'react';
import './App.css'
import LanguageContext from './dataInfo/LanguageContext'
import FormikCaptchaForm from './FormikCaptchaForm'
import AppHeader from './AppHeader';
import DisplayObject from './DisplayObject';
import { ErrorBoundary } from "react-error-boundary";
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router';
import ReadMore from './ReadMore';
import Parent from './Parent';
import ExampleRef from './ExampleRef';


function App() {

  const [lan, setLan] = useState<string>('fr'); 
  return (
    <>
    <ErrorBoundary fallbackRender={() => <div>Something went wrong.</div>}>
    <LanguageContext.Provider value={{lan, setLan}}>
     
      <BrowserRouter>
       <AppHeader/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/formik" element={<FormikCaptchaForm/>}/>
      <Route path="/display" element={<DisplayObject/>}/>
      <Route path="/parent" element={<Parent/>}/> 
      <Route path="/exampleRef" element={<ExampleRef/>}/>
      <Route path="/readmore" 
      element={<ReadMore text="This is a long text that will be truncated if it exceeds 50 characters." />}/>
      <Route path="*" element={<div>Page Not Found</div>}/>
     </Routes>
  
      </BrowserRouter>
    </LanguageContext.Provider>
   
   </ErrorBoundary>
    </>
  )
}

export default App
