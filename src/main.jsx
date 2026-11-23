/*
Acá toma mi aplicación de React y la monta dentro del navegador.

Recordar que main.jsx, carga a app.jsx
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
