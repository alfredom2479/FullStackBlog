import { useLoaderData } from "react-router-dom";
import { getBlogPost } from "../blogapi.js"
import ContentContainer from "../components/styles/ContentContainer.styled.js"
import ContentTextContainer from "../components/styles/ContentTextContainer.styled.js"

export async function loader({params}){
  console.log(params)
  const postData = await getBlogPost(params.id);
  return postData;
}

export default function BlogPost(){

  const blogPostData = useLoaderData();

  return(
    <>
    <ContentContainer>
      <ContentTextContainer>
        <h1>{blogPostData.title}</h1>
        <p>
          {blogPostData.content}
        </p>
      </ContentTextContainer>
    </ContentContainer>
     </> 
  )
}