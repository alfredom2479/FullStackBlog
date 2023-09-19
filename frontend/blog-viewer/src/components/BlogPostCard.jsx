import PropTypes from 'prop-types';
import { BlogPostCardLink } from "./styles/BlogPostCardLink.styled"

export default function BlogPostCard({blogPostData}){

  console.log("in card");
  console.log(blogPostData);
  return(
    <BlogPostCardLink to="/view/1">
       {blogPostData.title} 
    </BlogPostCardLink>
  )
}

BlogPostCard.propTypes = {
  blogPostData: PropTypes.object,
}