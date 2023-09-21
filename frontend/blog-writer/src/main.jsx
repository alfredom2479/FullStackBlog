import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import ManagerLayout from './components/ManagerLayout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
//import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerLayout/>,
    children:[
      {
        path: ":id",
        element: <h1>This will be the edit blog page</h1>
      }
    ]
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
