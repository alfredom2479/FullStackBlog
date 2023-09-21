import {Outlet} from "react-router-dom";

import ManPageContainer from "./styles/ManPageContainer.styled";


export default function ManagerLayout(){

  return(
    <ManPageContainer>
      <h1>This is going to be the nav of all posts</h1>
      <Outlet/>
      <h2>Testing this</h2>
    </ManPageContainer>
  )
}