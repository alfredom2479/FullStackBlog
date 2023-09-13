import React  from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

//import BlogPost from './pages/BlogPost.jsx'
import BlogPosts from "./pages/BlogPosts.jsx";
import Home from "./pages/Home.jsx";
import BlogPost from './pages/BlogPost.jsx';

import './index.css'
import BlogPostLayout from './components/BlogPostLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/blogposts",
    element: <BlogPosts />
  },
  {
    path: "view",
    element: <BlogPostLayout />,
    children:[
      {
        path: ":id",
        element: <BlogPost />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
