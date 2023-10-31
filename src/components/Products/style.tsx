import styled from "styled-components";

export const ProductsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-template-rows: 1fr;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: large;
  padding: 1rem 0 1rem 0rem;

  font-family: "Alumni Sans", sans-serif;
`;
