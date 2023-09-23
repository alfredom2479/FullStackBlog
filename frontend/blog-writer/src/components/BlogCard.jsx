import PropTypes from "prop-types";

import CardContainer from "./styles/CardContainer.styled";
import CardNavLink from "./styles/CardNavLink.styled";

export default function BlogCard({blogInfo}){

  return(
    <CardContainer>
      <CardNavLink>
        {blogInfo ? blogInfo.title : "[Blog Title]"}
      </CardNavLink>
    </CardContainer>
  )
}

BlogCard.propTypes = {
  blogInfo: PropTypes.object
}