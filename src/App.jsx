import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Chat from '@/components/chat/index';
import ChatBot from './components/chatBot/ChatBot';
import SupportEngine from './components/SupportEngine/SupportEngine';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/landingPage/LandingPage';
import ProductPage from './pages/ProductPage/ProductPage';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage';
import AllProductsPageViaChatPage from './pages/AllProductsViaChatPage/AllProductsViaChatPage';

function App() {
  

  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>

        <Route path="/" element={<LandingPage/>}/>
        <Route path="/p" element={<ProductPage/>}/>       
        <Route path="/ap" element={<AllProductsPage/>}/>
        <Route path="/apvc" element={<AllProductsPageViaChatPage/>}/>
        </Routes>
       <SupportEngine/>
    
    
    </BrowserRouter>
    </>
  )
}

export default App
