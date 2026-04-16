import React from 'react'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createHashRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'



const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/About",
        element: <About/>
      },
      {
        path: "Contact", 
        element: <Contact />
      },
      {
        path: "User/:userid",
        element: <User />
      },
    ]
  }
] )

createRoot(document.getElementById('root')).render(
 
    <React.StrictMode>
      <RouterProvider  router = {router} />
    </React.StrictMode>
  
)
