import PropTypes from "prop-types";
import CardContainer from "./styles/CardContainer.styled";

export default function BlogCard({blogInfo}){

  return(
    <CardContainer>
      {blogInfo ? blogInfo.title : "[Blog Title]"}
    </CardContainer>
  )
}

BlogCard.propTypes = {
  blogInfo: PropTypes.object
}