import PropTypes from "prop-types";

//import CardContainer from "./styles/CardContainer.styled";
import CardNavLink from "./styles/CardNavLink.styled";

export default function BlogCard({blogInfo}){

  return(
      <CardNavLink to={`/${blogInfo._id}`}>
        {blogInfo ? blogInfo.title : "[Blog Title]"}
      </CardNavLink>
  )
}

BlogCard.propTypes = {
  blogInfo: PropTypes.object
}