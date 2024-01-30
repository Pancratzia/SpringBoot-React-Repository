import React from 'react'
import ReactDOM from 'react-dom/client'
//import UsersApp from './UsersApp.jsx'
import LoginPage from './auth/pages/LoginPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
)
