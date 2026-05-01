import { useState } from 'react';
import './App.css'
import LanguageContext from './dataInfo/LanguageContext'
import FormikCaptchaForm from './FormikCaptchaForm'
import AppHeader from './AppHeader';
import DisplayObject from './DisplayObject';
import { ErrorBoundary } from "react-error-boundary";
import Home from './Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import ReadMore from './ReadMore';
import Parent from './Parent';
import ExampleRef from './ExampleRef';
import {Provider}  from 'react-redux';
import store from './store/store';
import CounterExample from './CounterExample';
import UserRedux from './UserRedux';
import SagaCounter from './SagaCounter';
import ProductDetailsInfo from './ProductDetailsInfo';
import NormalFunction from './NormalFunction';
import ProductWithPagination from './ProductWithPagination';
import HOCLayout from './HOCLayout';
import UserInfo from './UserHoc';
import NestedTopLevel from './NestedTopLevel';
import HtmlInfo from './HtmlInfo';
import ReadValueFromUrl from './ReadValueFromUrl';
import RouteInfo from './RouteInfo';

const HomeWithLayout = HOCLayout(Home);

function App() {

  const [lan, setLan] = useState<string>('fr'); 
  return (
    <>
    <ErrorBoundary fallbackRender={() => <div>Something went wrong.</div>}>
    <LanguageContext.Provider value={{lan, setLan}}>
      
     <Provider store={store}>
      <BrowserRouter>
    
      <RouteInfo/>

      
     {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/formik" element={<FormikCaptchaForm/>}/>
      <Route path="/display" element={<DisplayObject/>}/>
      <Route path="/parent" element={<Parent/>}/> 
      <Route path="/exampleRef" element={<ExampleRef/>}/>
      <Route path="/readmore" 
      element={<ReadMore text="This is a long text that will be truncated if it exceeds 50 characters." />}/>
      
      <Route path="/counter" element={<CounterExample/>}/>
      <Route path="/productdetails" element={<ProductDetailsInfo/>}/>
      <Route path="*" element={<div>Page Not Found</div>}/>
      <Route path="/userredux" element={<UserRedux/>}/>
      <Route path="/sagacounter" element={<SagaCounter/>}/>
      <Route path="/normalFunction" element={<NormalFunction/>}/> 
      <Route path="/productpagination" element={<ProductWithPagination/>}/>
      <Route path="/hoclayout" element={<HomeWithLayout/>}/>
      <Route path="/UserInfo" element={<UserInfo/>}/>
       <Route path="/readvalueFromUrl/:abc" element={<ReadValueFromUrl/>}/>
      <Route path="/NestedTopLevel" element={<NestedTopLevel/>}>
    
        <Route path='HtmlInfo' element={<HtmlInfo/>}/>
      

      </Route>

     </Routes> */}
  
      </BrowserRouter>
      </Provider>
    </LanguageContext.Provider>
      
   </ErrorBoundary>
    </>
  )
}

export default App
