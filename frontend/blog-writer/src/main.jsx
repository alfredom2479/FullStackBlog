import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import ManagerLayout from './components/ManagerLayout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import {action as loginAction} from "./pages/LoginPage";
import {loader as getMeAction} from "./components/ManagerLayout";
//import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerLayout/>,
    loader: getMeAction,
    //errorElement: <h1>u done f'd up A Aron</h1>,
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
    element: <LoginPage/>,
    action: loginAction
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
