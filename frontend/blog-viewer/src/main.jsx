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
import BlogPostLayout from './components/BlogPostLayout.jsx';

import {loader as BlogPostsLoader} from "./pages/BlogPosts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/blogposts",
    element: <BlogPosts />,
    loader: BlogPostsLoader,
    errorElement: <h1>OOpsies</h1>
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
