

export default function LoginPage(){

  return(
    <div>
      <form>
        <label htmlFor="email" >Email:</label>
        <input name="email" type="email" required/>
        <label htmlFor="password">Password:</label>
        <input name="password" type="password" required/>
        <button>Login</button>
      </form>
    </div>
  )
}