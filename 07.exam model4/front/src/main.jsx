import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import WishlistProvider from './context/WishlistContext/index.jsx'
import { Helmet, HelmetProvider } from 'react-helmet-async';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <WishlistProvider>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  
  </WishlistProvider>
    
  </BrowserRouter>,
)
