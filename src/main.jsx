import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Helmet } from 'react-helmet'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Helmet>
      <title>Chrono Dump —— 紀錄你的時間，豐富你的人生</title>
      <meta name='description' content='An App to Organized your time and efficiency your life.' />
    </Helmet>
    <App />
  </React.StrictMode>,
)
