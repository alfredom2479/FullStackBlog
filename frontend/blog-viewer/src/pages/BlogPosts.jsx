import '../App.css'

import BlogPostCard from '../components/BlogPostCard'

export default function BlogPosts(){

  return(
    <div className="home-container">
      <div className='list-container'>
        <BlogPostCard/>
        <BlogPostCard/>
        <BlogPostCard/>
        <BlogPostCard/>
        <BlogPostCard/>
        <BlogPostCard/>
        <BlogPostCard/>
        <BlogPostCard/>
      </div>
    </div>
  )
}