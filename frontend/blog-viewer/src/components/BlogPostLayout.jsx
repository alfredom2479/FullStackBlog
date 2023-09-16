//import "../App.css"

import { Outlet } from "react-router-dom"
import BlogPostBrowser from "./BlogPostBrowser"



export default function BlogPostLayout(){

  return(
    <div className="viewer-container">
      <div className="viewer-browser">
        <BlogPostBrowser/>
      </div>
      <div className="viewer-bp">
        <Outlet />
      </div>
    </div>
  )
}