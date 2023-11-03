import styled from "styled-components";

export const ProductsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
  justify-content: center;
  grid-template-rows: 1fr;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: large;
  padding: 1rem 0 1rem 0rem;

  font-family: "Alumni Sans", sans-serif;
`;

export const Skeleton = styled.div`
  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
`;
export const ImageSkeleton = styled(Skeleton)`
  height: 250px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const TitleSkeleton = styled(Skeleton)`
  height: 30px;
  margin: 1rem;
`;
