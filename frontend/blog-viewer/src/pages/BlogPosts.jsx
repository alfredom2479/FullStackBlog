//import '../App.css'
import { HomeGlobalStyles } from '../components/styles/Global'
import { ListContainer } from '../components/styles/ListContainer.styled'

import BlogPostCard from '../components/BlogPostCard'

export default function BlogPosts(){

  return(
    <>
    <HomeGlobalStyles/>
      <ListContainer>
        <BlogPostCard/>
        <BlogPostCard/>
        <BlogPostCard/>
        <BlogPostCard/>
        <BlogPostCard/>
        <BlogPostCard/>
        <BlogPostCard/>
      </ListContainer>
    </>
  )
}