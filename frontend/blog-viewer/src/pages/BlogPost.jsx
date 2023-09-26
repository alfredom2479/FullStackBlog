import { useLoaderData } from "react-router-dom";
import { getBlogPost } from "../blogapi.js"
import ContentContainer from "../components/styles/ContentContainer.styled.js"
import ContentTextContainer from "../components/styles/ContentTextContainer.styled.js"
import parse from "html-react-parser"
import {decode} from "html-entities";

export async function loader({params}){
  console.log(params)
  const postData = await getBlogPost(params.id);
  return postData;
}

export default function BlogPost(){

  const blogPostData = useLoaderData();
  const blogHtml = blogPostData ? decode(blogPostData.content,{level: "html5"}) : "";
  console.log(blogHtml);
  

    

  return(
    <>
    <ContentContainer>
      <ContentTextContainer>
        <h1>{blogPostData.title}</h1>
        <div >
          {parse(blogHtml)}
        </div>
      </ContentTextContainer>
    </ContentContainer>
     </> 
  )
}