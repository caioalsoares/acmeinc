import styled from "styled-components";

export const ProductsContainer = styled.main`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas: 
  "image name"
  "image price"
  "image description"
  "image buy"
  ;
  height: 100%;

  gap: 1rem;
`;

export const ProductImage = styled.figure`
    grid-area: image;
    & img {
        border-radius: 0.5rem;
    }
`
export const ProductName = styled.h1`
    grid-area: name;
    font-size: large;
`
export const ProductDescription = styled.div`
    grid-area: description;

`

export const ProductPrice = styled.div`
    grid-area: price;
`

export const ProductBuy = styled.div`
    grid-area: buy;
    justify-self: right;
    display: flex;
    gap: 1rem;
    align-items: center;

    & svg {
        fill: #000;
    }

`
