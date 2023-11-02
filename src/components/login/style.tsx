import styled from "styled-components";

export const LoginContainer = styled.div`
  max-width: 350px;
  padding: 1rem;
  text-align: center;
  border-radius: 0.5rem;
  align-self: center;
  margin: 0px auto;

  & h1 {
    font-size: medium;
    padding: 1rem;
  }

  & h2 {
    font-size: small;
    font-weight: 300;

    & a {
      text-decoration: underline;
      cursor: pointer;
      font-weight: 600;
    }
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
`;
export const LoginLabel = styled.label`
  display: flex;
  background-color: white;
  flex-direction: row;
  border-radius: 0.25rem;
  border: 1px solid #e1e1e1;
  overflow: hidden;

  & img {
    padding: 1rem;
    opacity: 0.1;
  }

  & input {
    flex: 1;
    outline: none;
    border: 0px;
  }

  &:focus-within {
    outline: auto;
  }
`;

export const ErrorText = styled.span`
  color: red;
  font-size: small;
`