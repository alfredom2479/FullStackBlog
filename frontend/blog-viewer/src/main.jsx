import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import Home from './pages/Home.jsx'
//import BlogPosts from './pages/BlogPosts.jsx'
import BlogPost from './pages/BlogPost.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlogPost />
  </React.StrictMode>,
)
