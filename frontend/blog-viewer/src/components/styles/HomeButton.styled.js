import styled from "styled-components";
import {Link} from "react-router-dom";


export const HomeLink = styled(Link)`
  //color: blue;
  background-color: rgba(200,200,200.5);
  width: 10rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 2rem;
  
  font-size: 1.2rem;
  color: #99c0ff;
  font-weight: 700;
  background-color: transparent;

  border-style: solid;
  border-color: #99c0ff;


  &:hover{
    background-color: white;
  }
  
`