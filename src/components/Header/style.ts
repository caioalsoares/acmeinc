import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1rem;
  display: flex;
  position: sticky;
  top: 0;
  backdrop-filter: blur(5px) saturate(300%);
  justify-content: space-between;
  z-index: 1;
`;

export const LogoContainer = styled.figure`
  & a {
    font-family: "Alumni Sans", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
    text-decoration: none;
  }
`;
