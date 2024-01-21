import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from './HelloWorldApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorldApp langName ={'React'} id = {1} fullName = {{name: 'Pancratzia', lastname: 'LaItaliana'}} />
  </React.StrictMode>,
)
