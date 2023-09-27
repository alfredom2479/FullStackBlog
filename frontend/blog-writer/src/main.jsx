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
import {action as createPostAction} from "./pages/NewPostPage"
import {
  loader as editBlogLoader,
  action as submitChangesAction
} from "./pages/EditBlogPage";
import {loader as getMeLoader} from "./components/ManagerLayout";
import EditBlogPage from './pages/EditBlogPage';
import NewPostPage from './pages/NewPostPage';
//import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerLayout/>,
    loader: getMeLoader,
    //errorElement: <h1>u done f'd up A Aron</h1>,
    children:[
      {
        path: ":id",
        element: <EditBlogPage/>,
        loader: editBlogLoader,
        action: submitChangesAction,
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
  },
  {
    path: "/create",
    element: <NewPostPage/>,
    action: createPostAction
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
