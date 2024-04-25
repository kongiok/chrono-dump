import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Helmet } from 'react-helmet'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Helmet>
      <title>Rapid Route —— 時刻掌握最新公車動態,輕鬆抵達目的地!</title>
      <meta name='description' content='Ensure you always have the latest bus status updates to efficiently reach your destination.' />
    </Helmet>
    <App />
  </React.StrictMode>,
)
