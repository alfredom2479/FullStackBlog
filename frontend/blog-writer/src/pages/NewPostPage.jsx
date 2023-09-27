import {useRef, useState} from "react";
import {Form, redirect } from "react-router-dom";
import {Editor} from "@tinymce/tinymce-react";

import NewPostContainer from "../components/styles/NewPostContainer.styled";
import { createBlogPost } from "../blogapi";

export async function action({request}){
  const formData = Object.fromEntries(await request.formData());

  if(!formData.isprivate){
    formData.isprivate = false;
  }
  else{
    formData.isprivate = true;
  }

  try{
    const data = await createBlogPost(formData);
    console.log(data);
  }catch(err){
    console.log("an oopsie woopsie doopsie has occured");
    return err.message;
  }

  return redirect("/");
}

export default function NewPostPage(){

  const [newContent, setNewContent] = useState("");
  const editorRef = useRef(null)
  
  return(
    <>
      <NewPostContainer>
        <h1>New Blog Post</h1>

      <Form method="POST" >
        <label htmlFor="title">Blog Post Title:</label>
        <input name="title" type="text"/>
        <label htmlFor="isprivate">Make Private</label>
        <input name="isprivate" type="checkbox"/>

     <Editor
        name="blogcontent"
        apiKey='ufr773nh2hdstcfr49r1ufr74twm7maos51jfbr8jnf1l105'
        onInit={(evt, editor) => editorRef.current = editor}
        onEditorChange={(newVal)=> setNewContent(newVal)}
        initialValue=""
        value={newContent}
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
        value={newContent}>
      </input>
      <button >Save Changes</button>
      
      </Form>
      </NewPostContainer>
    </>
  )
}