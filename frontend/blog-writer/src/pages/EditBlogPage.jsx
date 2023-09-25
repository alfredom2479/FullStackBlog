import {useRef} from "react";
import {
  useLoaderData,
  Form,
  redirect
} from "react-router-dom";
import {Editor} from "@tinymce/tinymce-react";
import { getBlogPost } from "../blogapi";

export async function loader({params}){
  //console.log(params);
  const blogPostData = await getBlogPost(params.id);
  return blogPostData;
}

export async function action({request}){

  const formData = await request.formData();
  console.log(formData);

  return redirect("/");
}

export default function EditBlogPage(){

  const blogPostData = useLoaderData();
  //console.log(blogPostData)

  const editorRef = useRef(null);
  const log = () =>{
    if (editorRef.current){
      console.log(editorRef.current.getContent());
    }
  }

  return(
    <div>
      <h1>{blogPostData ? blogPostData.title : ""}</h1>
      <Form to="/">
      <label htmlFor="isprivate" /> Hidden
      <input type="checkbox" name="isprivate"/>
     <Editor
        name="blogcontent"
        apiKey='ufr773nh2hdstcfr49r1ufr74twm7maos51jfbr8jnf1l105'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={blogPostData.content}
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
      <button onClick={log}>Log editor content</button>
      <button type="submit">Save changes</button>
      </Form>
    </div>
  )
}