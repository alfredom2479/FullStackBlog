//import "../App.css"

import { Outlet, useLoaderData } from "react-router-dom"
//import BlogPostBrowser from "./BlogPostBrowser"
// import { ReaderGlobalStyles } from "./styles/Global"
import { SideBarContainer } from "./styles/SideBarContainer.styled"
import ViewerContainer from "./styles/ViewerContainer.styled"
import BlogPostCard from "./BlogPostCard"



export default function BlogPostLayout(){

  const blogPostsData = useLoaderData();

  return(
    <>
      <ViewerContainer>
        <SideBarContainer>
          {blogPostsData.map((data)=>{
             return <BlogPostCard key={data._id} blogPostData={data}/> 
           })} 
        </SideBarContainer>
        <Outlet />
      </ViewerContainer>
    </>
    
  )
}