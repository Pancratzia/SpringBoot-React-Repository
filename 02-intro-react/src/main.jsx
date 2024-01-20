import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let h1 = React.createElement('div', null, React.createElement('h1', null, 'Hola mundo, desde React'));

h1 = <div><ul><li>Adiós, Mundo!</li></ul></div>

ReactDOM.createRoot(document.getElementById('root')).render(
  h1
  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/
)
