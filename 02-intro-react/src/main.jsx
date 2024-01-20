import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorld } from './components/HelloWorld'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld langName ={'React'} id = {1} fullName = {{name: 'Pancratzia', lastname: 'LaItaliana'}} />
  </React.StrictMode>,
)
