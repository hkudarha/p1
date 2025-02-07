import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Services from './Components/Services/Services.jsx'
import Contact from './Components/Contact/Contact.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children :[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'services',
        element: <Services/>
      },
      {
        path:'contact',
        element:<Contact/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
