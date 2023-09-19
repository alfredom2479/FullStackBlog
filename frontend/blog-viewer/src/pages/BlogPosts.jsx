//import '../App.css'
import { HomeGlobalStyles } from '../components/styles/Global'
import { ListContainer } from '../components/styles/ListContainer.styled'

import BlogPostCard from '../components/BlogPostCard'

import { getBlogPosts } from '../../blogapi'
import { useLoaderData } from 'react-router-dom';

export async function loader(){
  const postData =  await getBlogPosts();
  console.log(postData);

  return postData;
}

export default function BlogPosts(){

  const blogPostsData = useLoaderData();
  //console.log(blogPostsData.length);

  return(
    <>
    <HomeGlobalStyles/>
      <ListContainer>
      {blogPostsData.map((data)=>{
        return <BlogPostCard key={data.title} blogPostData={data}/>
      })}
      </ListContainer>
    </>
  )
}