import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/projects/ecom_store/App.jsx'
import './components/projects/ecom_store/index.css'
import './components/projects/ecom_store/App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


