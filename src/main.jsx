
import './index.css'
import ReactDOM from 'react-dom/client';
import React from 'react';

import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
