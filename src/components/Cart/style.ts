import styled from "styled-components";

export const CartWrapper = styled.div<{ $show: boolean }>`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  backdrop-filter: blur(5px) grayscale(80%);
  display: ${(props) => (props.$show ? "block" : "none")};
`;

export const CartContainer = styled.aside`
  @keyframes showCart {
    from {
      transform: translateX(300px);
    }
    to {
      transform: translateX(0px);
    }
  }
  animation: 0.5s 1 showCart ease-out;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
`;

export const CartTitle = styled.h1`
  font-family: "Alumni Sans", sans-serif;
  font-weight: 300;
`;

export const CartHeader = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
  overflow: auto;
  flex-direction: column;
  gap: 0.25rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProductCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas:
    "image title remove"
    "image price price";
  gap: 1rem;
`;

export const ProductCardImage = styled.figure`
  grid-area: image;
`;

export const ProductCardTitle = styled.h1`
  grid-area: title;
  font-size: 14px;
`;

export const ProductCardPrice = styled.div`
  grid-area: price;
  display: flex;
  font-size: 14px;
  justify-content: right;
`;

export const CloseButton = styled.img`
  cursor: pointer;
`;

export const Total = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: right;
`;

export const Remove = styled.div`
  grid-area: remove;
  & img {
    cursor: pointer;
  }
`;
