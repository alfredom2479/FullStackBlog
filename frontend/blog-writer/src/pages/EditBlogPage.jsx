import {useRef, useState} from "react";
import {
  useLoaderData,
  Form,
  redirect
} from "react-router-dom";
import {Editor} from "@tinymce/tinymce-react";
import { getBlogPost, updateBlogPost } from "../blogapi";

//import parse from "html-react-parser";
import {decode} from "html-entities";

export async function loader({params}){
  //console.log(params);
  const blogPostData = await getBlogPost(params.id);
  return blogPostData;
}

export async function action({request,params}){
  const formData = Object.fromEntries(await request.formData());
  console.log(formData);
  console.log(params)
  if(formData.isprivate && formData.isprivate === "on"){
    formData.isprivate = true;
  }
  try{
    const data = await updateBlogPost(params.id,formData);
    console.log("result:");
    console.log(data);
  }catch(err){
    console.log("an error has occured :(");
    return err.message;
  }

  return redirect("/")
}

/*export async function action({request}){
  console.log("in login action");
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log('ac email: '+email);
  console.log('ac pass: '+password);
  try{
    const data = await loginUser({email,password});
    console.log(data);
    return redirect("/");
  }catch(err){
    return err.message
  }
}*/

export default function EditBlogPage(){
  const [blogContent, setBlogContent] = useState("");

  const blogPostData = useLoaderData();
  const blogHtml = blogPostData ? decode(blogPostData.content, {level: "html5"}) : "";
  //console.log(blogPostData)

  const editorRef = useRef(null);
  /*
  const log = () =>{
    if (editorRef.current){
      console.log(editorRef.current.getContent());
      setBlogContent(editorRef.current.getContent());
    }
  }
  */

  return(
    <div>
      <h1>{blogPostData ? blogPostData.title : ""}</h1>
      <Form method="POST">
      <label htmlFor="isprivate" /> Hidden
      <input type="checkbox" name="isprivate"/>
     <Editor
        name="blogcontent"
        apiKey='ufr773nh2hdstcfr49r1ufr74twm7maos51jfbr8jnf1l105'
        onInit={(evt, editor) => editorRef.current = editor}
        onEditorChange={(newVal)=> setBlogContent(newVal)}
        initialValue={blogHtml}
        value={blogContent}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <input 
        name="content" 
        type="hidden" 
        value={blogContent}>
      </input>
      <button >Save Changes</button>
      
      </Form>
    </div>
  )
}