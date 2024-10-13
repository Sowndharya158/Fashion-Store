// App.jsx
import React, { useState, useRef } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from './Components/Main';
import Checkout from './Components/Checkout';
import Layout from './Components/Layout';
import Orders from './Components/Orders';
export default function App() {

  return (
    <>
    
    <Routes>
<Route path='/' element={<Layout/>}>
   <Route index element={<Main/>}/>
   <Route path='payment' element={<Checkout/>}/>
   <Route path="orders" element={<Orders/>}/>
</Route>
      </Routes>
      
    </>
  );
}


