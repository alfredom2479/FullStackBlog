import { getBlogPost } from "../../blogapi.js"
import ContentContainer from "../components/styles/ContentContainer.styled.js"
import ContentTextContainer from "../components/styles/ContentTextContainer.styled.js"

export async function loader(){
  const postData = await getBlogPost();
  return postData;
}

export default function BlogPost(){

  return(
    <>
    <ContentContainer>
      <ContentTextContainer>
        <h1>Blog Post Title</h1>
        <p>
          This is the bloc post content. Hopefully it will 
          format well. If it doesnt then oh well I will fix it 
          later but if it does than that would be cool I guess. 
          I am just setting up the basic pages for the future.
          <br/>
          <br/>
          Test
        </p>
      </ContentTextContainer>
    </ContentContainer>
     </> 
  )
}