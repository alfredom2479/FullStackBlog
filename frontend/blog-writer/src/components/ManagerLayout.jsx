import {Outlet, useLoaderData} from "react-router-dom";

import ManPageContainer from "./styles/ManPageContainer.styled";
import { getMe } from "../blogapi";

export async function loader(){
    const myInfo = await getMe();
    if(!myInfo){
      return "ur not logged in mate";
    }
    return myInfo;
}

export default function ManagerLayout(){

  const myInfo = useLoaderData();
  console.log(myInfo);

  return(
    <ManPageContainer>
      <h1>This is going to be the nav of all posts</h1>
      <Outlet/>
      {myInfo && <h2>Welcome, {myInfo.username}!</h2>}
    </ManPageContainer>
  )
}