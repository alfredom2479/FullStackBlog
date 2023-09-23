import styled from "styled-components";

const CardContainer = styled.div`
  background: black;
  color: white;
  min-width: 10rem;
  height: 5rem;
  margin: .5rem;
  padding: .5rem;

  display: flex;
  align-items: center;
  justify-content:center;
  text-align:center;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default CardContainer;