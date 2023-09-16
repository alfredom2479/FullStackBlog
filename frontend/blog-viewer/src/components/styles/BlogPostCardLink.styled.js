import styled from "styled-components";

import { Link } from "react-router-dom";

export const BlogPostCardLink = styled(Link)`

  display: flex;
  justify-content: center;
  align-items: center;

  border-style: solid;
  border-radius: 10px;
  border-color: var(--personality-color);

  height: 4rem;
  margin: 1rem;
  padding: 1rem;

  color: var(--personality-color);
  font-weight: 900;

  &:hover{
    background-color: #d9e7ff;
  }
`;