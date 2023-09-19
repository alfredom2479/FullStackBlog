import PropTypes from 'prop-types';
import { BlogPostCardLink } from "./styles/BlogPostCardLink.styled"

export default function BlogPostCard({blogPostData}){

  return(
    <BlogPostCardLink to={`/view/${blogPostData._id}`}>
       {blogPostData.title} 
    </BlogPostCardLink>
  )
}

BlogPostCard.propTypes = {
  blogPostData: PropTypes.object,
}