import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import {UserProvider} from "./componentes/context/userProvider.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </UserProvider>
)
