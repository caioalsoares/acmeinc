import styled from "styled-components";

export const ProductContainer = styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  max-width: 250px;
  height: 100%;
  overflow: hidden;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  position: relative;
  transition: 0.25s;

  &:hover {
    transform: scale(1.025);
  }
`;

export const ProductInfoContainer = styled.div`
  padding: 0.75rem;
  display: grid;
  flex: 1;
  display: flex;
  gap: 0.5rem;
`;

export const ProductTitle = styled.div`
  font-weight: 600;
  flex: 1;
`;

export const Favorite = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export const Price = styled.div`
  display: flex;
  font-weight: 300;
  align-items: center;
  justify-content: center;
  align-content: center;
  font-size: 18px;
`;
