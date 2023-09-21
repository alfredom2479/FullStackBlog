import {Form, redirect, useActionData} from "react-router-dom";
import { loginUser } from "../blogapi";


export async function action({request}){
  console.log("in action");
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try{
    const data = await loginUser({email,password});
    console.log(data);
    return redirect("/");
  }catch(err){
    return err.message
  }
}
export default function LoginPage(){

  const errorMessage = useActionData();

  return(
    <div>
      <Form method="post">
        <label htmlFor="email" >Email:</label>
        <input name="email" type="email" placeholder="user@mail.com" required/>
        <label htmlFor="password">Password:</label>
        <input name="password" type="password" placeholder="password" required/>
        <button>Login</button>
      </Form>
      <div>
        Errer?: {errorMessage && errorMessage.message}
      </div>
    </div>
  )
}