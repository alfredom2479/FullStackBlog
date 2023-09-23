import {Outlet, useLoaderData} from "react-router-dom";

import ManPageContainer from "./styles/ManPageContainer.styled";
import { getBlogPosts, getMe } from "../blogapi";
import BlogCard from "./BlogCard";
import PostBrowserContainer from "./styles/PostsBrowserContainer.styled";

export async function loader(){
    let [myInfo, blogPosts] = await Promise.all([getMe(),getBlogPosts()]);
    if(!myInfo){
      //return {username: "ur not logged in mate"};
      myInfo = {username: "ERROR"}
    }
    if(!blogPosts){
      blogPosts = [];
    }
    
    return {myInfo,blogPosts};
}

export default function ManagerLayout(){

  const loadedData = useLoaderData();
  const myInfo = loadedData.myInfo;
  const blogPosts = loadedData.blogPosts ? loadedData.blogPosts.blogposts : [];
  console.log(loadedData);
  console.log(loadedData.blogPosts)

  return(
    <ManPageContainer>
      <h1>This is going to be the nav of all posts</h1>
      <PostBrowserContainer>
        {blogPosts.map((post) => <BlogCard key={post._id} blogInfo={post}/>)}
      </PostBrowserContainer>
      <Outlet/>
      {myInfo && <h2>Welcome, {myInfo.username}!</h2>}
    </ManPageContainer>
  )
}