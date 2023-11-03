import { useContext } from "react";
import { CartContext } from "../../App";
import styled from "styled-components";
import { LoginInfo, UserInfo } from "../../api/login";

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
  const user = localStorage.getItem("loggedUser");

  const users: UserInfo[] = JSON.parse(localStorage.getItem("users") || "[]");

  const findUser = users.find((item) => item.email == user);

  const resultJson = {
    user: {
      name: findUser && findUser.name,
      email: findUser && findUser.email,
      telephone: findUser && findUser.telephone,
    },
    cart,
  };

  return (
    <ResultContainer>
      <pre>{JSON.stringify(resultJson, null, 2)}</pre>
    </ResultContainer>
  );
};

export default Result;
