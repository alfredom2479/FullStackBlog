import {Outlet, useLoaderData} from "react-router-dom";

import ManPageContainer from "./styles/ManPageContainer.styled";
import { getMe } from "../blogapi";
import BlogCard from "./BlogCard";
import PostBrowserContainer from "./styles/PostsBrowserContainer.styled";

export async function loader(){
    const myInfo = await getMe();
    if(!myInfo){
      return {username: "ur not logged in mate"};
    }
    return myInfo;
}

export default function ManagerLayout(){

  const myInfo = useLoaderData();
  console.log(myInfo);

  return(
    <ManPageContainer>
      <h1>This is going to be the nav of all posts</h1>
      <PostBrowserContainer>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </PostBrowserContainer>
      <Outlet/>
      {myInfo && <h2>Welcome, {myInfo.username}!</h2>}
    </ManPageContainer>
  )
}