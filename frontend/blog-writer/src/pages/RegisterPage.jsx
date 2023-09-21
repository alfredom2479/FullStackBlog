import {Form} from "react-router-dom";

export default function RegisterPage(){

  

  return(
    <div>
      <Form>
        <label htmlFor="username">Username:</label>
        <input name="username" required/>

        <label htmlFor="email" >Email:</label>
        <input name="email" type="email" required/>

        <label htmlFor="password">Password:</label>
        <input name="password" type="password" required/>

        <label htmlFor="confirm-password">Password:</label>
        <input name="confirm-password" type="password" required/>

        <button>Sign Up</button>
      </Form>
    </div>
  )
}