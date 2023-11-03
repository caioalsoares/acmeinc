import { useContext } from "react";
import { CartContext } from "../../App";
import styled from "styled-components";

const ResultContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  width: 100vw;
  word-break: break-all;
  background-color: white;
`;

const Result = () => {
  const cart = useContext(CartContext);

  return (
    <ResultContainer>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </ResultContainer>
  );
};

export default Result;
